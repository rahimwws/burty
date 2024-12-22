import { useQuery } from "@tanstack/react-query";
import { reviews } from "../../model/routes";

const useReviews = (spaceId?: string) => {

   return useQuery({
      queryKey: ["reviews"],
      queryFn: () => reviews.getReviews(spaceId!),
      enabled: !!spaceId,
      staleTime: 5 * 60 * 1000,
   });
};

export default useReviews;