import { client } from "@/shared/api";
import { CommentT, CommentCreateDto } from "../types";

const comments = {
  async getComments(bookingId: string) {
    return await client.get<CommentT[]>(
      `/comments/${bookingId}`
    );
  },

  async createComment({ bookingId, comment }: CommentCreateDto) {
    return await client.post(
      `/comments/${bookingId}`,
      {
        comment
      }
    )
  },
  
};

export default comments;