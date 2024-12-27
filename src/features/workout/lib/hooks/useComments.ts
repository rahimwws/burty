import { useQuery } from "@tanstack/react-query";
import comments from "../../model/routes/comment";

const useComments = (bookingId?: string) => {

  return useQuery({
    queryKey: ["comments", bookingId],
    queryFn: () => comments.getComments(bookingId!),
    enabled: !!bookingId,
    staleTime: 5 * 60 * 1000,
  });
};

export default useComments;