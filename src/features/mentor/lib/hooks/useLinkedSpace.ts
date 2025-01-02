import { useQuery } from "@tanstack/react-query";
import mentor from "../../model/routes";

const useLinkedSpace = (spaceId?: string) => {
   return useQuery({
      queryKey: ["linkedSpaces", spaceId],
      queryFn: () => mentor.getLinkedSpace(spaceId!),
      staleTime: 5 * 60 * 1000,
      enabled: !!spaceId,
   });
};

export default useLinkedSpace;