import { client } from "@/shared/api";
import * as FileSystem from "expo-file-system";
export const user = {
  async get() {
    return await client.get<User>("/users/me");
  },
  async uploadAvatar(uri: string): Promise<void> {
    const formData = new FormData();

    const fileUri = FileSystem.documentDirectory + "image.jpg";
    await FileSystem.copyAsync({ from: uri, to: fileUri });

    const fileInfo = await FileSystem.getInfoAsync(fileUri);
    const file = {
      uri: fileInfo.uri,
      type: "image/jpeg",
      name: "image.jpg",
    };

    formData.append("image", file as any);

    return client.post("/users/profile/picture", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  async changeProfile(email: string, userName: string, password?: string) {
    return client.patch("/users", {
      email,
      userName,
      password,
    });
  },

  async deleteAccount() {
    return client.delete("users");
  },
};
