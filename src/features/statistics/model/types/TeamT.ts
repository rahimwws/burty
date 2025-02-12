import MatchAction from "./MatchAction"

type TeamT = {
   teamName: string
   matchStatistics: {
      action: MatchAction
      timestamp: string
   }[]
   matchPlayers: {
      users: {
         id: string
         email: string
      }
   }[]
}

export default TeamT;