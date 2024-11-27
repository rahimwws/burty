import { useMutation } from "@tanstack/react-query";
import { user } from "../../model/routes";
import { isAxiosError } from "axios";

export const useChangeAvatar = () => {
  return useMutation({
    mutationKey: ["change_avatar"],
    mutationFn: ({ uri }: { uri: string }) => user.uploadAvatar(uri),
    onError: (err) => {
      if (isAxiosError(err)) {
        alert(err.response?.data.message);
      }
    },
  });
};
