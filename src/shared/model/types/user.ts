// Define the media type
export interface Media {
  filePath: string;
}

export interface User {
  id: string;
  email: string;
  role: "USER" | "MENTOR";
  firstName: string;
  lastName: string;
  lastLoginTime: string;
  media: Media;
  latitude: number;
  longitude: number;
}
