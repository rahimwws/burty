import { useMutation } from "@tanstack/react-query";
import { booking } from "../../model/routes";
import { toast } from "@/shared/ui/Toast";

const useCreateTeam = () => {
   return useMutation({
      mutationFn: ({ bookingId, teamName }: { bookingId: string, teamName: string }) => booking.createTeam(bookingId, teamName),
      onError: (err: any) => {
         toast.show({
            description: err?.response?.data?.message || "External service error",
            type: 'error',
            duration: 4000
         })
      }
   });
};

export default useCreateTeam;