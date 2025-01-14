import { useQuery } from "@tanstack/react-query";
import mentor from "../../model/routes";

const useUserPasses = (userId?: string) => {
   return useQuery({
      queryKey: ["userPasses", userId],
      queryFn: () => mentor.getUserPasses(userId!),
      staleTime: 5 * 60 * 1000,
      enabled: !!userId,
   });
};

export default useUserPasses;