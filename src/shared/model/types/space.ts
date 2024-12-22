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
  endTime: Date;
  latitude: number;
  longitude: number;
  maxPlayers: number;
  maxPrice: number;
  minPlayers: number;
  minPrice: number;
  openTime: Date;
  phoneNumber: string;
  averageRating: number;
  site: string;
  medias: PlaceMediaT[]
  distanceInM: number
}
