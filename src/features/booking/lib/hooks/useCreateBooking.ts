import { useMutation } from "@tanstack/react-query";
import { booking } from "../../model/routes";
import { BookingCreateDto } from "../../model/types";

const useCreateBooking = () => {
  return useMutation({
    mutationFn: (dto: BookingCreateDto) => booking.createBooking(dto),
  });
};

export default useCreateBooking;