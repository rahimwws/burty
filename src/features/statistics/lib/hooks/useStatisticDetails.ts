import { useQuery } from "@tanstack/react-query";
import { statistics } from "../../model/routes";
import StatisticParamsDto from "../../model/types/StatisticParamsDto";

const useStatisticDetails = ({
  matchId, userId
}: StatisticParamsDto) => {
  return useQuery({
    queryKey: ["statistic", userId, matchId],
    queryFn: () => {
      return statistics.getUserStatisticDetails({
        matchId, userId
      })
    },
  });
};

export default useStatisticDetails;
