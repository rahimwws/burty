import { client } from "@/shared/api";
import StatisticsParamsDto from "../types/StatisticsParamsDto";
import StatisticParamsDto from "../types/StatisticParamsDto";
import StatisticT from "../types/StatisticT";

export const statistics = {
   async getUserStatisticsList({
      page, take, userId
   }: StatisticsParamsDto) {
      return await client.get<StatisticT[]>(
         `/user-statistics/${userId}/matches`,
         {
            params: {
               page, take
            }
         }
      );
   },
   async getUserStatisticDetails({
      userId, matchId
   }: StatisticParamsDto) {
      return await client.get<StatisticT>(
         `/user-statistics/${userId}/matches/${matchId}`,
      );
   },
};
