import { create } from "zustand";
import { UserT } from "../model/types";

interface UserState {
  user: UserT | null;
  setUser: (user: UserT) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user: UserT) =>
    set(() => ({
      user,
    })),

  clearUser: () =>
    set(() => ({
      user: null,
    })),
}));
