import { client } from "@/shared/api";
import Booking from "../types/Booking";

export const booking = {
   async getBookings(time: 7 | 30 | 90) {
      return await client.get<Booking[]>(
         `/bookings`,
         {
            params: {
               time
            }
         }
      );
   },
   async getBooking(bookingId: string) {
      return await client.get<Booking>(
         `/bookings/${bookingId}`,
      );
   },
   async cancelBooking(bookingId: string) {
      return await client.patch(
         `/bookings/${bookingId}/cancel`,
      );
   }
};
