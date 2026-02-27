// app/components/AuthInitializer.js
"use client";

import { useEffect } from "react";
import authStore from "@/lib/authStore";

export default function AuthInitializer() {
  useEffect(() => {
    (async () => {
      await authStore.getState().initializeAuth();
    })();
  }, []);

  return null;
}
