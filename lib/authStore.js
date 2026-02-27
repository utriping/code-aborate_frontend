import { create } from "zustand";
import { persist } from "zustand/middleware"; // ✅ This should work
import api from "./axiosRequestConfig";

const authStore = create(
  persist(
    (set) => ({
      userData: null,
      signIn: (userDetails) => set((state) => ({ userData: userDetails })),
      signOut: () => set((state) => ({ userData: null })),
      initializeAuth: async () => {
        try {
          const res = await api.get("/me");
          set({ userData: res.data });
        } catch (err) {
          set({ userData: null });
        }
      },
    }),
    { name: "authStore" },
  ),
);

export default authStore;
