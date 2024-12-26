import { useMutation } from "@tanstack/react-query";
import { booking } from "../../model/routes";

const useCancelBooking = () => {
   return useMutation({
      mutationFn: (bookingId: string) => booking.cancelBooking(bookingId),
   });
};

export default useCancelBooking;