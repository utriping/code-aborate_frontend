import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";
import { cookies } from "next/headers";

const ACCESS_SECRET = new TextEncoder().encode(process.env.JWT_ACCESS_SECRET);
const REFRESH_SECRET = new TextEncoder().encode(process.env.JWT_REFRESH_SECRET);

export async function proxy(request) {
  const refreshToken = request.cookies.get("refresh-token")?.value;
  const accessToken = request.cookies.get("access-token")?.value;

  const { pathname } = request.nextUrl;

  // 1️⃣ Public routes
  const publicRoutes = ["/login", "/sign-up", "/api/refreshAccessToken"];
  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  // 2️⃣ No tokens at all
  if (!accessToken && !refreshToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // 3️⃣ Verify access token
  try {
    await jwtVerify(accessToken, ACCESS_SECRET);
    return NextResponse.next();
  } catch (err) {
    // 4️⃣ Access token expired, try refresh token
    if (!refreshToken) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    try {
      await jwtVerify(refreshToken, REFRESH_SECRET);

      // Refresh token valid, request new access token
      const refreshResponse = await fetch(
        new URL("/api/refreshAccessToken", request.url),
        {
          method: "POST",
          headers: {
            Cookie: request.headers.get("cookie") || "",
          },
        },
      );

      if (!refreshResponse.ok) {
        return NextResponse.redirect(new URL("/login", request.url));
      }

      const response = NextResponse.next();

      // Copy Set-Cookie headers
      refreshResponse.headers.getSetCookie().forEach((cookie) => {
        response.headers.append("Set-Cookie", cookie);
      });

      return response;
    } catch (err) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/profile/:path*",
    "/api/auth/:path*",
    "/chat/:path*",
    "/api/me",
  ],
};
