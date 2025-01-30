import { useMemo } from "react";
import convertToMatchDetails from "../utils/convertToMatchDetails";
import TransformedMatchDetailsData from "../../model/types/TransformedMatchDetailsData";
import TeamT from "../../model/types/TeamT";

const useMatchDetails = (teamData?: TeamT[] | null) => {
   const matchDetails = useMemo(() => {
      if (!teamData) return { goal: [], foul: [] } as TransformedMatchDetailsData;

      return convertToMatchDetails(teamData);
   }, [teamData]);

   return matchDetails;
};

export default useMatchDetails;
