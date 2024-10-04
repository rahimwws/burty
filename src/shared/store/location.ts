import { create } from "zustand";

interface LocationState {
  latitude: number | null;
  longitude: number | null;
  setLocation: (latitude: number, longitude: number) => void;
  clearLocation: () => void;
}

export const useLocationStore = create<LocationState>((set) => ({
  latitude: null,
  longitude: null,
  setLocation: (latitude, longitude) => set(() => ({ latitude, longitude })),
  clearLocation: () => set(() => ({ latitude: null, longitude: null })),
}));
