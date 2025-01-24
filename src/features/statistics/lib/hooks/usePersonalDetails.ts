import { useMemo } from "react";
import MatchAction from "../../model/types/MatchAction";
import getStringByMatchAction from "../utils/getStringByMatchAction";
import getTimeOnly from "@/shared/lib/utils/getTimeOnly";
import StatisticT from "../../model/types/StatisticT";

type PersonalDetail = {
   type: string;
   score: number;
   timing: string;
}

const usePersonalDetails = (details?: StatisticT | null) => {
   const personalDetails = useMemo(() => {
      if (!details?.statistics) return [];

      const actionMap = new Map<MatchAction, PersonalDetail>();

      for (const { action, timestamp } of details.statistics) {
         if (actionMap.has(action)) {
            const currentDetail = actionMap.get(action)!;
            currentDetail.score += 1;
         } else {
            actionMap.set(action, {
               type: getStringByMatchAction(action),
               score: 1,
               timing: getTimeOnly(timestamp, "HH:ss"),
            });
         }
      }

      return Array.from(actionMap.values());
   }, [details]);

   return personalDetails;
};

export default usePersonalDetails;
