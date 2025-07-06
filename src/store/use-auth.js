import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useAdminAuthStore = create(
  persist(
    (set, _get, api) => ({
      userData: null,
      permissions: null,
      token: null,
      setUserData: (userData) => set({ userData }),
      setPermissions: (permissions) => set({ permissions }),
      setToken: (token) => set({ token }),
      reset: () => {
        set({ userData: null, token: null });
        api.persist.clearStorage();
      },
    }),
    {
      name: "admin-auth",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
