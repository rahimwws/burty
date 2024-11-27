import { client } from "@/shared/api";
import { PlaceT } from "@/shared/model/types";
import axios from "axios";

export const spaces = {
  async getNearbySpaces(latitude: number | null, longitude: number | null) {
    console.log("fetch near spaces");

    if (latitude && longitude) {
      try {
        return await client.get<PlaceT[]>(
          `/spaces/nearby?latitude=${latitude}&longitude=${longitude}&maxDistance=10000`
        );
      } catch (error) {
        if (axios.isAxiosError(error)) {
          alert(error.response?.data);
        } else {
          alert(error);
        }
      }
    } else {
      console.warn("Invalid coordinates: latitude or longitude is null.");
    }
  },

  async getPopularSpaces(latitude: number | null, longitude: number | null) {
    if (latitude && longitude) {
      try {
        return await client.get<PlaceT[]>(
          `/spaces/popular?latitude=${latitude}&longitude=${longitude}&maxDistance=10000`
        );
      } catch (error) {
        if (axios.isAxiosError(error)) {
          alert(error.response?.data);
        } else {
          alert(error);
        }
      }
    } else {
      console.warn("Invalid coordinates: latitude or longitude is null.");
    }
  },
};
