import { useQuery } from "@tanstack/react-query";
import mentor from "../../model/routes";

const useMatch = (matchId: string) => {
   return useQuery({
      queryKey: ["match", matchId],
      queryFn: () => mentor.getMatch(matchId),
      staleTime: 5 * 60 * 1000,
   });
};

export default useMatch;