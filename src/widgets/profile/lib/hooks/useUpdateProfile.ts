import { useMutation } from "@tanstack/react-query";
import { user } from "../../model/routes";
import { isAxiosError } from "axios";
import { useAppNavigation } from "@/shared/lib/navigation";
import { removeTokens } from "@/shared/api/token/storage";

export const useUpdateProfile = () => {
  return useMutation({
    mutationFn: ({
      email,
      userName,
      password,
    }: {
      email: string;
      userName: string;
      password?: string;
    }) => user.changeProfile(email, userName, password),
    onError: (err) => {
      if (isAxiosError(err)) {
        alert(err.response?.data.message);
      }
    },
  });
};
