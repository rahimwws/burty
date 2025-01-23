import { useInfiniteQuery } from "@tanstack/react-query";
import StatisticsParamsDto from "../../model/types/StatisticsParamsDto";
import { statistics } from "../../model/routes";

const useStatisticList = ({
   page, take, userId
}: StatisticsParamsDto) => {

   return useInfiniteQuery({
      initialPageParam: 1,
      queryKey: ["statistics", page, take, userId],
      queryFn: ({ pageParam }) => {
         return statistics.getUserStatisticsList({
            page: pageParam,
            take,
            userId
         })
      },
      getNextPageParam: (lastPage, allPages) =>
         lastPage.data.length ? Number(allPages.length) + 1 : undefined,
   });
};

export default useStatisticList;
