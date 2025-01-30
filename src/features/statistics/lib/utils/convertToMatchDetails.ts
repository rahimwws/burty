import TeamT from "../../model/types/TeamT";
import TransformedMatchDetailsData from "../../model/types/TransformedMatchDetailsData";



function convertToMatchDetails(teamData: TeamT[]): TransformedMatchDetailsData {
   const result: TransformedMatchDetailsData = {
      goal: [],
      foul: [],
   };

   teamData.forEach((team) => {
      const goalCount = team.matchStatistics.filter((stat) => stat.action === "GOAL").length;
      const foulCount = team.matchStatistics.filter((stat) =>
         ["YELLOW_CARD", "RED_CARD"].includes(stat.action)
      ).length;

      result.goal.push({ name: team.teamName, score: goalCount });
      result.foul.push({ name: team.teamName, score: foulCount });
   });

   return result;
}

export default convertToMatchDetails;