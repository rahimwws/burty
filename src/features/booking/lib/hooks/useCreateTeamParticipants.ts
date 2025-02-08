import { useMutation } from "@tanstack/react-query";
import { booking } from "../../model/routes";
import { toast } from "@/shared/ui/Toast";

const useCreateTeamParticipants = () => {
   return useMutation({
      mutationFn: ({ bookingId, teamId, email }: { bookingId: string, teamId: string, email: string }) =>
         booking.createTeamParticipants(bookingId, teamId, email),
      onError: (err: any) => {
         toast.show({
            description: err?.response?.data?.message || "External service error",
            type: 'error',
            duration: 4000
         })
      }
   });
};

export default useCreateTeamParticipants;