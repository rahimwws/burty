import { useMutation, useQueryClient } from "@tanstack/react-query";
import { user } from "../../model/routes";
import { isAxiosError } from "axios";
import { useAppNavigation } from "@/shared/lib/navigation";
import { removeTokens } from "@/shared/api/token/storage";
import mentor from "@/features/mentor/model/routes";
import useUserIdStore from "@/features/auth/model/stores/userId";

export const useDeleteAccount = () => {
  const navigation = useAppNavigation();
  const queryClient = useQueryClient();
  const setUserId = useUserIdStore((store) => store.setId);

  return useMutation({
    mutationFn: (isMentor: boolean = false) => isMentor ?
      mentor.deleteAccount() : user.deleteAccount(),
    onSuccess: async (data) => {
      console.log(data.data);
      setUserId("");
      queryClient.invalidateQueries({
        queryKey: ["profile"]
      });
      await removeTokens();
      navigation.navigate("Auth");
    },
    onError: (err) => {
      if (isAxiosError(err)) {
        alert(err.response?.data.message);
      }
    },
  });
};
