import { useMutation, useQueryClient } from "@tanstack/react-query";
import mentor from "../../model/routes";
import { MatchAction } from "@/features/statistics";

const useMatchAction = (matchId: string) => {
   const queryClient = useQueryClient();
   return useMutation({
      mutationFn: ({ matchId, playerId, matchAction }: { matchId: string, playerId: string, matchAction: MatchAction }) =>
         mentor.createMatchAction(matchId, playerId, matchAction),
      onSuccess: () => {
         queryClient.invalidateQueries({
            queryKey: ["match", matchId]
         })
      }
   })
}

export default useMatchAction;