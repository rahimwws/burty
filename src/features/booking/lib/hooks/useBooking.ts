import { useQuery } from "@tanstack/react-query";
import { booking } from "../../model/routes";

const useBooking = (bookingId?: string) => {

   return useQuery({
      queryKey: ["booking", bookingId],
      queryFn: () => booking.getBooking(bookingId!),
      enabled: !!bookingId,
      staleTime: 5 * 60 * 1000,
   });
};

export default useBooking;