import { useMemo } from "react";
import StatisticDetailsT from "../../model/types/StatisticDetailsT";
import convertToMatchDetails from "../utils/convertToMatchDetails";
import TransformedMatchDetailsData from "../../model/types/TransformedMatchDetailsData";

const useMatchDetails = (details?: StatisticDetailsT | null) => {
   const matchDetails = useMemo(() => {
      if (!details?.matchStatistics) return { goal: [], foul: [] } as TransformedMatchDetailsData;

      return convertToMatchDetails(details);
   }, [details]);

   return matchDetails;
};

export default useMatchDetails;
