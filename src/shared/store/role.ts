import { create } from "zustand";

type Role = "mentor" | "user";

interface RoleState {
  role: Role;
  setRole: (newRole: Role) => void;
  toggleRole: () => void;
}

const useRoleStore = create<RoleState>((set) => ({
  role: "user",
  setRole: (newRole) => set({ role: newRole }),
  toggleRole: () =>
    set((state) => ({ role: state.role === "mentor" ? "user" : "mentor" })),
}));

export default useRoleStore;
