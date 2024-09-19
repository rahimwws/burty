import { create } from "zustand";

interface UserId {
  id: string;
  setId: (id: string) => void;
}

const useUserIdStore = create<UserId>((set) => ({
  id: "",
  setId: (id: string) => set({ id }),
}));

export default useUserIdStore;
