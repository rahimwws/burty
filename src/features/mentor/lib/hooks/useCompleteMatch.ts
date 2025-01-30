import { useMutation, useQueryClient } from "@tanstack/react-query";
import mentor from "../../model/routes";

const useCompleteMatch = (matchId: string) => {
   const queryClient = useQueryClient();
   return useMutation({
      mutationFn: ({ matchId }: { matchId: string }) => mentor.completeMatch(matchId),
      onSuccess: () => {
         queryClient.invalidateQueries({
            queryKey: ["match", matchId]
         })
      }
   })
}

export default useCompleteMatch;