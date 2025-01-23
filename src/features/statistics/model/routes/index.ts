import { client } from "@/shared/api";
import StatisticsParamsDto from "../types/StatisticsParamsDto";
import Statistic from "../types/Statistic";

export const statistics = {
   async getUserStatisticsList({
      page, take, userId
   }: StatisticsParamsDto) {
      return await client.get<Statistic[]>(
         `/user-statistics/${userId}/matches`,
         {
            params: {
               page, take
            }
         }
      );
   },
};
