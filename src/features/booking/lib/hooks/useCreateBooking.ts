import { useMutation } from "@tanstack/react-query";
import { booking } from "../../model/routes";
import { BookingCreateDto } from "../../model/types";
import { toast } from "@/shared/ui/Toast";

const useCreateBooking = () => {
  return useMutation({
    mutationFn: (dto: BookingCreateDto) => booking.createBooking(dto),
    onError: (err:any) => {
      toast.show({
        description: err?.response?.data?.message || "External service error",
        type: 'error',
        duration: 4000
      })
    }
  });
};

export default useCreateBooking;