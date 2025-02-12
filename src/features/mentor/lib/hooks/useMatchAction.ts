import { useMutation, useQueryClient } from "@tanstack/react-query";
import mentor from "../../model/routes";
import { MatchAction } from "@/features/statistics";
import { toast } from "@/shared/ui/Toast";

const useMatchAction = (matchId: string) => {
   const queryClient = useQueryClient();
   return useMutation({
      mutationFn: ({ matchId, playerId, matchAction }: { matchId: string, playerId: string, matchAction: MatchAction }) =>
         mentor.createMatchAction(matchId, playerId, matchAction),
      onSuccess: () => {
         queryClient.invalidateQueries({
            queryKey: ["match", matchId]
         });
         toast.show({
            type: "success",
            description: "Action created"
         })
      },
      onError: (err: any) => {
         toast.show({
            description: err?.response?.data?.message || "External service error",
            type: 'error',
            duration: 4000
         })
      }
   })
}

export default useMatchAction;