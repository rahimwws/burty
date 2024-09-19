import { useMutation } from "@tanstack/react-query";
import { auth } from "../../model/routes";
import { AxiosError, isAxiosError } from "axios";

export const useNewPassword = () => {
  return useMutation({
    mutationFn: (password: string) => auth.newPassword(password),
    onSuccess: async (data) => {
      console.log(data.data.user.id);
      // await saveToken(data.data.accessToken);
      //   setUserId(data.data.user.id);
    },
    onError: (err) => {
      if (isAxiosError(err)) {
        alert(err.response?.data);
        console.log(err.response?.data);
      }
    },
  });
};
