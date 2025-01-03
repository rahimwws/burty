import { useMutation, useQueryClient } from "@tanstack/react-query";
import { user } from "../../model/routes";
import { isAxiosError } from "axios";
import { useAppNavigation } from "@/shared/lib/navigation";
import { removeTokens } from "@/shared/api/token/storage";

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      firstName,
      lastName,
      password,
    }: {
      firstName: string;
      lastName: string;
      password?: string;
    }) => user.changeProfile(firstName, lastName, password),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['profile']
      })
    },
    onError: (err) => {
      if (isAxiosError(err)) {
        alert(err.response?.data.message);
      }
    },
  });
};
