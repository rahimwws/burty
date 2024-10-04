// Define the media type
export interface Media {
  filePath: string;
}

export interface User {
  id: string;
  email: string;
  role: "USER" | "MENTOR";
  userName: string;
  lastLoginTime: string;
  media: Media;
  latitude: number;
  longitude: number;
}
