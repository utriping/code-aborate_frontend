"use client";

import { useState } from "react";

export default function SignIn() {
  const [focused, setFocused] = useState(null);
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const fields = [
    {
      name: "name",
      label: "Full Name",
      type: "text",
      placeholder: "Jane Doe",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
      ),
    },
    {
      name: "username",
      label: "Username",
      type: "text",
      placeholder: "@janedoe",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
          />
        </svg>
      ),
    },
    {
      name: "email",
      label: "Email Address",
      type: "email",
      placeholder: "jane@example.com",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
      ),
    },
    {
      name: "password",
      label: "Password",
      type: showPassword ? "text" : "password",
      placeholder: "••••••••••",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
          />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600;700&family=DM+Sans:wght@300;400;500&display=swap');

        .signin-wrapper {
          font-family: 'DM Sans', sans-serif;
        }

        .signin-title {
          font-family: 'Cormorant Garamond', serif;
        }

        .field-input {
          transition: border-color 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease;
        }

        .field-input:focus {
          outline: none;
        }

        .submit-btn {
          position: relative;
          overflow: hidden;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .submit-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0.12);
          opacity: 0;
          transition: opacity 0.2s ease;
        }

        .submit-btn:hover::after {
          opacity: 1;
        }

        .submit-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 8px 28px rgba(177, 15, 46, 0.45);
        }

        .submit-btn:active {
          transform: translateY(0px);
        }

        .card-appear {
          animation: cardIn 0.55s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        @keyframes cardIn {
          from { opacity: 0; transform: translateY(24px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0)   scale(1);    }
        }

        .ornament-line {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .ornament-line::before,
        .ornament-line::after {
          content: '';
          flex: 1;
          height: 1px;
        }

        .ornament-line::after {
        }

        .noise-bg {
          position: relative;
        }

        .noise-bg::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none;
          border-radius: inherit;
        }
      `}</style>

      <section
        className="signin-wrapper min-h-screen flex items-center justify-center px-4 py-16"
        style={{ backgroundColor: "#F3DFC1" }}
      >
        {/* Background decorative shapes */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          aria-hidden
        >
          <div
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10"
            style={{
              background: "radial-gradient(circle, #B10F2E, transparent 70%)",
            }}
          />
          <div
            className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full opacity-8"
            style={{
              background: "radial-gradient(circle, #B10F2E, transparent 70%)",
            }}
          />
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 opacity-20"
            style={{}}
          />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-24 opacity-20" />
        </div>

        <div
          className="noise-bg card-appear relative w-full max-w-md rounded-3xl shadow-2xl px-8 pt-10 pb-10"
          style={{
            backgroundColor: "#FDFAF5",
            boxShadow:
              "0 32px 80px rgba(177,15,46,0.12), 0 8px 24px rgba(0,0,0,0.06)",
            border: "1px solid rgba(177,15,46,0.1)",
          }}
        >
          <div className="mb-8 text-center">
            <div
              className="mx-auto mb-5 w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: "#B10F2E" }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#F3DFC1"
                strokeWidth="2"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                />
              </svg>
            </div>

            <h1
              className="signin-title text-4xl font-bold mb-1 leading-tight"
              style={{ color: "#B10F2E" }}
            >
              Create Account
            </h1>
            <p className="text-sm font-light" style={{ color: "#7a5c4a" }}>
              Join us — it only takes a moment.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-4"
            noValidate
          >
            {fields.map((field) => {
              const isFocused = focused === field.name;
              const hasValue = form[field.name].length > 0;

              return (
                <div key={field.name} className="relative">
                  <label
                    htmlFor={field.name}
                    className="block text-xs font-medium mb-1.5 tracking-wide uppercase"
                    style={{
                      color: isFocused ? "#B10F2E" : "#7a5c4a",
                      transition: "color 0.2s",
                    }}
                  >
                    {field.label}
                  </label>
                  <div className="relative flex items-center">
                    {/* Icon */}
                    <span
                      className="absolute left-3.5 pointer-events-none transition-colors duration-200"
                      style={{ color: isFocused ? "#B10F2E" : "#b09080" }}
                    >
                      {field.icon}
                    </span>

                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      value={form[field.name]}
                      onChange={handleChange}
                      onFocus={() => setFocused(field.name)}
                      onBlur={() => setFocused(null)}
                      autoComplete={
                        field.name === "password" ? "new-password" : field.name
                      }
                      className="field-input w-full pl-10 pr-10 py-3 rounded-xl text-sm"
                      style={{
                        backgroundColor: isFocused ? "#fff" : "#F9F4EC",
                        border: `1.5px solid ${isFocused ? "#B10F2E" : hasValue ? "rgba(177,15,46,0.3)" : "rgba(177,15,46,0.12)"}`,
                        boxShadow: isFocused
                          ? "0 0 0 3px rgba(177,15,46,0.08)"
                          : "none",
                        color: "#2a1a14",
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    />

                    {/* Password toggle */}
                    {field.name === "password" && (
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3.5 transition-colors duration-200"
                        style={{ color: isFocused ? "#B10F2E" : "#b09080" }}
                        tabIndex={-1}
                        aria-label={
                          showPassword ? "Hide password" : "Show password"
                        }
                      >
                        {showPassword ? (
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            className="w-4 h-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                            />
                          </svg>
                        ) : (
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            className="w-4 h-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Password hint */}
            <p className="text-xs" style={{ color: "#b09080" }}>
              Use 8+ characters with a mix of letters, numbers & symbols.
            </p>

            {/* Terms */}
            <div className="flex items-start gap-2.5 pt-1">
              <input
                id="terms"
                type="checkbox"
                className="mt-0.5 rounded cursor-pointer"
                style={{ accentColor: "#B10F2E" }}
              />
              <label
                htmlFor="terms"
                className="text-xs leading-relaxed"
                style={{ color: "#7a5c4a" }}
              >
                I agree to the{" "}
                <a
                  href="#"
                  className="underline underline-offset-2 font-medium hover:opacity-70 transition-opacity"
                  style={{ color: "#B10F2E" }}
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="underline underline-offset-2 font-medium hover:opacity-70 transition-opacity"
                  style={{ color: "#B10F2E" }}
                >
                  Privacy Policy
                </a>
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="submit-btn w-full py-3.5 rounded-xl text-sm font-semibold tracking-wide mt-2"
              style={{
                backgroundColor: "#B10F2E",
                color: "#F3DFC1",
                letterSpacing: "0.04em",
              }}
            >
              Create My Account
            </button>
          </form>

          {/* Divider */}
          <div className="ornament-line my-6">
            <span className="text-xs font-light" style={{ color: "#b09080" }}>
              or continue with
            </span>
          </div>

          {/* Social */}
          <div className="grid grid-cols-2 gap-3">
            {[
              {
                label: "Google",
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                    fill="currentColor"
                  >
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                ),
              },
              {
                label: "GitHub",
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                    fill="currentColor"
                    style={{ color: "#24292e" }}
                  >
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                ),
              },
            ].map(({ label, icon }) => (
              <button
                key={label}
                type="button"
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  border: "1.5px solid rgba(177,15,46,0.15)",
                  backgroundColor: "#F9F4EC",
                  color: "#2a1a14",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                }}
              >
                {icon}
                {label}
              </button>
            ))}
          </div>

          {/* Sign in link */}
          <p className="text-center text-xs mt-6" style={{ color: "#7a5c4a" }}>
            Already have an account?{" "}
            <a
              href="#"
              className="font-semibold underline underline-offset-2 hover:opacity-70 transition-opacity"
              style={{ color: "#B10F2E" }}
            >
              Sign in
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
