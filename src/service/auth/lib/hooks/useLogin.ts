import { isAxiosError } from "axios";
import { auth } from "../../model/routes";
import { useMutation } from "@tanstack/react-query";
import { saveTokens } from "@/shared/api/token/storage";
import { useState } from "react";
import useRoleStore from "@/shared/store/role";
export const useLogin = (email: string, password: string) => {
  const [errorMessage, setError] = useState<string | null>(null);
  const setRole = useRoleStore((store) => store.setRole);
  const mutation = useMutation({
    mutationFn: () => auth.login(email, password),
    onSuccess: async (data) => {
      console.log(data.data);
      setRole(data.data.user.role === "USER" ? "user" : "mentor");
      await saveTokens(data.data.accessToken, data.data.refreshToken);
    },
    onError: (error) => {
      if (isAxiosError(error)) {
        console.log(error.response?.data);

        setError(error.response?.data?.message || error.message);
      } else {
        setError(error.message);
      }
    },
  });
  return { ...mutation, errorMessage };
};
