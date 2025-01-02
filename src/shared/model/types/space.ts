import ReviewT from "@/features/reviews/model/types/Review"

export interface PlaceMediaT {
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
}

export interface PlaceT {
  id: string;
  name: string;
  address: string;
  endTime: string;
  latitude: number;
  longitude: number;
  maxPlayers: number;
  maxPrice: number;
  minPlayers: number;
  minPrice: number;
  openTime: string;
  phoneNumber: string;
  averageRating?: number;
  site: string;
  medias: PlaceMediaT[]
  distance?: {
    kilometers: number,
    meters: number
  }
  distanceInM?: number
  distanceInKm?: number
  reviews?: ReviewT[]
}
