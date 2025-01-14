import { useMutation } from "@tanstack/react-query";
import { user } from "../../model/routes";
import { isAxiosError } from "axios";
import { useAppNavigation } from "@/shared/lib/navigation";
import { removeTokens } from "@/shared/api/token/storage";
import mentor from "@/features/mentor/model/routes";

export const useDeleteAccount = () => {
  const navigation = useAppNavigation();
  return useMutation({
    mutationFn: (isMentor: boolean = false) => isMentor ?
      mentor.deleteAccount() : user.deleteAccount(),
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
