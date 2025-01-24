import { client } from "@/shared/api";
import { getRefreshToken } from "@/shared/api/token/storage";
import { PlaceT } from "@/shared/model/types";
import { User } from "@/shared/model/types/user";
import * as FileSystem from "expo-file-system";
import UserPassT from "../types/UserPassT";
import { StatisticsParamsDto, StatisticT } from "@/features/statistics";
import MatchesParamsDto from "../types/MatchesParamsDto";

const mentor = {
  async getLinkedSpaces() {
    return await client.get<PlaceT[]>(
      `/mentor/linked-spaces`
    );
  },
  async getLinkedSpace(spaceId: string) {
    return await client.get<PlaceT>(
      `/mentor/linked-spaces/${spaceId}`
    );
  },
  async getUserPasses(userId?: string) {
    return await client.get<UserPassT[]>(
      `/mentor/bookings/${userId}`
    );
  },
  async getMentorInfo() {
    return await client.get<User>(
      `/mentor/me`
    )
  },
  async changeProfile(firstName: string, lastName: string, password?: string) {
    return client.patch("/mentor", {
      firstName,
      lastName,
      password,
    });
  },
  async getMatches({
    page, take, isCompleted
  }: MatchesParamsDto) {
    return await client.get<StatisticT[]>(
      `/matches`,
      {
        params: {
          page, take, isCompleted
        }
      }
    );
  },
  async getMatch(matchId: string) {
    return await client.get<StatisticT>(
      `/matches/${matchId}`
    );
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

    return client.post("/mentor/profile/picture", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  async deleteAccount() {
    return client.delete("mentor");
  },
};

export default mentor;