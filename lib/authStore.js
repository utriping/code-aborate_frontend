import { create } from "zustand";
import { persist } from "zustand/middleware"; // ✅ This should work

const authStore = create(
  persist(
    (set) => ({
      userData: null,
      signIn: (userDetails) => set((state) => ({ userData: userDetails })),
      signOut: () => set((state) => ({ userData: null })),
      initializeAuth: async () => {
        const res = await api.get("/me");
        if (res.success) {
          set({ userData: res.data });
        } else {
          set({ userData: null });
        }
      },
    }),
    { name: "authStore" },
  ),
);

export default authStore;
