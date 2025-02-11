import { useMutation, useQueryClient } from "@tanstack/react-query";
import { booking } from "../../model/routes";

const useCancelBooking = () => {
   const queryClient = useQueryClient();
   return useMutation({
      mutationFn: (bookingId: string) => booking.cancelBooking(bookingId),
      onSuccess() {
         queryClient.invalidateQueries({
            queryKey: ["bookings"],
         })
      }
   });
};

export default useCancelBooking;