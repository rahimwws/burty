type UserPassT = {
  user: {
    firstName: string
    lastName: string
    email: string
    media: {
      id: string
      fileName: string
      filePath: string
      mediaType: string
      mimeType: string
      originalName: string
      size: string
    }
  },
  bookings: {
    id: string
    playersCount: number
    price: number
    spaceId: string
    isArchived: boolean
    startDate: string
    endDate: string
    status: string
    userId: string
    createdAt: string
    startTime: string
    endTime: string
    space: {
      id: string
      name: string
      description: string
      address: string
      endTime: string
      latitude: number
      longitude: number
      maxPlayers: string
      maxPrice: number
      minPlayers: number
      minPrice: number
      openTime: string
      phoneNumber: string
      site: string
      isBooked: boolean
      medias: {
        filePath: string
      }[]
    }
  }[]
}

export default UserPassT;