import { useQuery } from "@tanstack/react-query";
import { booking } from "../../model/routes";

const useBookings = (time?: 7 | 30 | 90) => {

   return useQuery({
      queryKey: ["bookings"],
      queryFn: () => booking.getBookings(time!),
      enabled: !!time,
      staleTime: 5 * 60 * 1000,
   });
};

export default useBookings;