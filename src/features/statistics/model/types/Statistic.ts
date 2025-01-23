import MatchAction from "./MatchAction";

type Statistic = {
   id: string
   bookingId: string
   endDate: string
   isCompleted: boolean
   spaceId: string
   mentorId: string
   startDate: string
   createdAt: string
   updatedAt: string
   statistics: {
      id: string
      matchId: string
      action: MatchAction
      playerId: string
      timestamp: string
   }[]
   evaluations: {
      id: string
      behaviorRating: number
      comments: string
      issuedBlackTicket: boolean
      matchId: string
      skillRating: number
      createdAt: string
      playerId: string
   }[]
};

export default Statistic;