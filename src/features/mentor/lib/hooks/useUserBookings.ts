import { useQuery } from "@tanstack/react-query";
import mentor from "../../model/routes";

const useUserBookings = (userId: string) => {
   return useQuery({
      queryKey: ["userBookings", userId],
      queryFn: () => mentor.getUserPasses(userId),
      staleTime: 5 * 60 * 1000,
   });
};

export default useUserBookings;