import { client } from "@/shared/api";
import { PlaceT } from "@/shared/model/types";
import FilterParamsDto from '../types/FilterParamsDto';
import axios from "axios";
import removeFalsyFields from "@/shared/lib/utils/removeFalsyFields";

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

  async getFilteredSpaces({
    latitude,
    longitude,
    maxDistance,
    minPrice,
    maxPrice,
    search
  }: FilterParamsDto & {
    latitude: number | null
    longitude: number | null
  }) {
    console.log(JSON.stringify(removeFalsyFields({
      latitude,
      longitude,
      maxDistance,
      minPrice,
      maxPrice,
      // passType: passType?.toLowerCase(),
      q: search
    }), null, 2))
    if (latitude && longitude) {
      try {
        return await client.get<PlaceT[]>(
          `/spaces/filter`,
          {
            params: removeFalsyFields({
              latitude,
              longitude,
              maxDistance,
              minPrice,
              maxPrice,
              // passType: passType?.toLowerCase(),
              q: search
            })
          }
        );
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log(JSON.stringify(error.response?.data, null, 2));
        } else {
          console.log(JSON.stringify(error, null, 2));
        }
      }
    } else {
      console.warn("Invalid coordinates: latitude or longitude is null.");
    }
  },

  async getSpaceDetails(latitude: number | null, longitude: number | null, spaceId: string) {
    if (latitude && longitude) {
      try {
        return await client.get<PlaceT>(
          `/spaces/${spaceId}`,
          {
            params: {
              longitude,
              latitude
            }
          }
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
  }
};
