import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware';
import storage from "./persisterStorage";

type Role = "mentor" | "user";

interface RoleState {
  role: Role;
  setRole: (newRole: Role) => void;
  toggleRole: () => void;
}

const useRoleStore = create(
  persist<RoleState>(
    (set) => ({
      role: "user",
      setRole: (newRole) => set({ role: newRole }),
      toggleRole: () =>
        set((state) => ({ role: state.role === "mentor" ? "user" : "mentor" })),
    }),
    {
      name: "role-storage",
      storage: createJSONStorage(() => storage)
    }
  ));

export default useRoleStore;
