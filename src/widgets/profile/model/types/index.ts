// Define the media type
interface Media {
  filePath: string;
}

interface User {
  id: string;
  email: string;
  role: "USER" | "MENTOR";
  userName: string;
  lastLoginTime: string;
  media: Media;
}
