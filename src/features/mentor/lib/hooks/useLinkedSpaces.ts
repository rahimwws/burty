import { useQuery } from "@tanstack/react-query";
import mentor from "../../model/routes";

const useLinkedSpaces = () => {
   return useQuery({
      queryKey: ["linkedSpaces"],
      queryFn: () => mentor.getLinkedSpaces(),
      staleTime: 5 * 60 * 1000,
   });
};

export default useLinkedSpaces;