import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import storage from "./persisterStorage";

interface BookingState {
  bookingIDs: string[];
  addBookingID: (bookingID: string) => void;
  removeBookingID: (bookingID: string) => void;
  clearBookingIDs: () => void;
}

export const useBookingIDStore = create( // TODO need to clear data when booking is payed
  persist<BookingState>(
    (set) => ({
      bookingIDs: [],
      addBookingID: (bookingID: string) =>
        set((state) => ({
          bookingIDs: [...state.bookingIDs, bookingID],
        })),
      removeBookingID: (bookingID: string) =>
        set((state) => ({
          bookingIDs: state.bookingIDs.filter((id) => id !== bookingID),
        })),
      clearBookingIDs: () =>
        set(() => ({
          bookingIDs: [],
        })),
    }),
    {
      name: "role-storage",
      storage: createJSONStorage(() => storage),
    }
  )
);
