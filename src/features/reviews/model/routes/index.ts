import { client } from "@/shared/api";
import axios from "axios";
import ReviewT from "../types/Review";
import ReviewCreateDto from "../types/ReviewCreateDto";

export const reviews = {
   async getReviews(spaceId: string) {
      try {
         return await client.get<ReviewT[]>(
            `/reviews/${spaceId}`
         );
      } catch (error) {
         if (axios.isAxiosError(error)) {
            alert(error.response?.data);
         } else {
            alert(error);
         }
      }
   },
   async createReview({ bookingId, comment, rating }: ReviewCreateDto) {
      return await client.post(
         `/reviews/${bookingId}`,
         {
            comment,
            rating
         }
      );
   }
};
