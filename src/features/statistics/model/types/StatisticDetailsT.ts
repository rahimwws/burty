import MatchAction from "./MatchAction"
import TeamT from "./TeamT"

type StatisticDetailsT = {
   id: string
   space: {
      name: string
   },
   evaluations: {
      id: string
      createdAt: string
      comments: string
      skillRating: number
      behaviorRating: number
      rating: number
      issuedBlackTicket: boolean
   }[]
   team: TeamT[]
   startDate: string
   endDate: string
   status: 0,
   matchStatistics: {
      teamName: string
      goals: number
      fouls: number
   }[]
   personalDetails: {
      type: string
      score: number
      timing: string
   }[]
}

export default StatisticDetailsT;