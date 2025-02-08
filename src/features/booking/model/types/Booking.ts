import BookingStatus from "./BookingStatus"

type Booking = {
   id: string
   startDate: string
   endDate: string
   startTime: string
   endTime: string
   isArchived: boolean
   price: number
   playersCount: number
   createdAt: string
   status: BookingStatus
   userId: string
   spaceId: string
   spaces: {
      id: string
      name: string
      address: string
      site: string
      categoryId: string
      phoneNumber: string
      openTime: string
      endTime: string
      longitude: number
      latitude: number
      minPrice: number
      maxPrice: number
      minPlayers: number
      maxPlayers: number
      medias: {
         id: string
         fileName: string
         filePath: string
         size: string
         mimeType: string
         originalName: string
         spaceId: string
         mediaType: string
         createdAt: string
         updatedAt: string
      }[]
   }
}

export default Booking;