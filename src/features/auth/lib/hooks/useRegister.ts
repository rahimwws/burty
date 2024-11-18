import { auth } from "../../model/routes";
import { useMutation } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { useState } from "react";
import useUserIdStore from "../../model/stores/userId";
export const useRegister = (
  email: string,
  password: string,
  role: "MENTOR" | "USER"
) => {
  const [errorMessage, setError] = useState<string | null>(null);
  const setUserId = useUserIdStore((store) => store.setId);
  const mutation = useMutation({
    mutationFn: () => auth.register(email, password, role),
    onSuccess: async (data) => {
      console.log(data.data.user.id);
      setUserId(data.data.user.id);
    },
    onError: (error) => {
      if (isAxiosError(error)) {
        setError(error.response?.data?.message || error.message);
      } else {
        setError(error.message);
      }
    },
  });

  return { ...mutation, errorMessage };
};
