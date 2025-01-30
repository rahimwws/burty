import { MatchAction } from "@/features/statistics"
import TeamT from "@/features/statistics/model/types/TeamT"
import { PlaceT } from "@/shared/model/types"

type MatchDetails = {
   id: string
   space: PlaceT
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
}

export default MatchDetails;