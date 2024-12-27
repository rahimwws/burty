import { client } from "@/shared/api";
import { getRefreshToken } from "@/shared/api/token/storage";
import { UserT } from "@/shared/model/types";
import * as FileSystem from "expo-file-system";
export const user = {
  async get() {
    return await client.get<UserT>("/users/me");
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
  async changeProfile(firstName: string, lastName: string, password?: string) {
    return client.patch("/users", {
      firstName,
      lastName,
      password,
    });
  },

  async deleteAccount() {
    return client.delete("users");
  },

  async logOut() {
    const refreshToken = await getRefreshToken();
    return client.post("auth/logout", {
      refreshToken: refreshToken
    });
  },
};
