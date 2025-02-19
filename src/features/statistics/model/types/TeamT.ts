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
         firstName: string
         lastName: string
      }
   }[]
}

export default TeamT;