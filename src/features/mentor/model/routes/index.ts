import { client } from "@/shared/api";
import { PlaceT } from "@/shared/model/types";
import { User } from "@/shared/model/types/user";

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
   async getMentorInfo() {
      return await client.get<User>(
         `/mentor/me`
      )
   }
};

export default mentor;