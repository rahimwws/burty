import { client } from "@/shared/api";
import Booking from "../types/Booking";
import BookingCreateDto from "../types/BookingCreateDto";
import { BookingPaymentIntent } from "../types";

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
   },
   async createBooking({
      spaceId,
      playersCount,
      startDate,
      visitTime
   }: BookingCreateDto) {
      return await client.post<BookingCreatedRes>(
         `/bookings/${spaceId}`,
         {
            playersCount,
            startDate,
            visitTime
         }
      );
   },
   async createPaymentIntent() {
      return await client.post<BookingPaymentIntent>(
         `/stripe/create-payment-intent`
      )
   }
};
