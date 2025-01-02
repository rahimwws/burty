import BookingStatus from "./BookingStatus"

type Booking = {
   id: string
   passType: string
   playersCount: number
   price: number
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
   isArchived: boolean
   startDate: string
   status: BookingStatus
   userId: string
   createdAt: string
   startTime: string
   endTime: string
}

export default Booking;