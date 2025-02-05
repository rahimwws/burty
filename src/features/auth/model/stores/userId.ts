import storage from "@/shared/store/persisterStorage";
import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware';

interface UserId {
  id: string;
  setId: (id: string) => void;
}

const useUserIdStore = create(
  persist<UserId>((set) => ({
    id: "",
    setId: (id: string) => set({ id }),
  }),
  {
    name: "userId-storage",
    storage: createJSONStorage(() => storage)
  })
);

export default useUserIdStore;
