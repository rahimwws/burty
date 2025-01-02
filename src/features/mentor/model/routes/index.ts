import { client } from "@/shared/api";
import { PlaceT } from "@/shared/model/types";

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
};

export default mentor;