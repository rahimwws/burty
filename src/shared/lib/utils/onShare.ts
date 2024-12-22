import { Share } from "react-native";

const onShare = async (link: string) => {
   try {
      const result = await Share.share({
         message: link,
      });
      if (result.action === Share.sharedAction) {
         if (result.activityType) {
            // shared with activity type of result.activityType
         } else {
            // shared
         }
      } else if (result.action === Share.dismissedAction) {
         // dismissed
      }
   } catch (error: any) {
      alert(error.message);
   }
};

export default onShare;