import { useInfiniteQuery } from "@tanstack/react-query";
import mentor from "../../model/routes";
import MatchesParamsDto from "../../model/types/MatchesParamsDto";

const useMatches = ({
   isCompleted, page, take
}: MatchesParamsDto) => {
   return useInfiniteQuery({
      initialPageParam: 1,
      queryKey: ["matches", isCompleted, page, take],
      queryFn: ({ pageParam }) => {
         return mentor.getMatches({ isCompleted, page, take })
      },
      getNextPageParam: (lastPage, allPages) =>
         lastPage.data.length ? Number(allPages.length) + 1 : undefined,
   });
};

export default useMatches;