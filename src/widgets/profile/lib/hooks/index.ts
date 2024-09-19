import { useMutation } from "@tanstack/react-query";
import { user } from "../../model/routes";
import { isAxiosError } from "axios";
import { useAppNavigation } from "@/shared/lib/navigation";
import { removeTokens } from "@/shared/api/token/storage";
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

export const useDeleteAccount = () => {
  const navigation = useAppNavigation();
  return useMutation({
    mutationFn: () => user.deleteAccount(),
    onSuccess: (data) => {
      console.log(data.data);
      removeTokens();
      navigation.navigate("Auth");
    },
    onError: (err) => {
      if (isAxiosError(err)) {
        alert(err.response?.data.message);
      }
    },
  });
};
