import { useMutation } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import mentor from "@/features/mentor/model/routes";

export const useChangeMentorAvatar = () => {
  return useMutation({
    mutationKey: ["change_mentor_avatar"],
    mutationFn: ({ uri }: { uri: string }) => mentor.uploadAvatar(uri),
    onError: (err) => {
      if (isAxiosError(err)) {
        alert(JSON.stringify(err.response?.data,null,2));
      }
    },
  });
};
