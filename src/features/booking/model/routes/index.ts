import { client } from "@/shared/api";
import axios from "axios";
import Booking from "../types/Booking";

export const booking = {
   async getBookings(time: 7 | 30 | 90) {
      try {
         return await client.get<Booking[]>(
            `/bookings`,
            {
               params: {
                  time
               }
            }
         );
      } catch (error) {
         if (axios.isAxiosError(error)) {
            alert(JSON.stringify(error.response?.data, null, 2));
         } else {
            alert(JSON.stringify(error, null, 2));
         }
      }
   },
};
