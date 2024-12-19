import { useMutation } from "@tanstack/react-query";
import { auth } from "../../model/routes";
import { isAxiosError } from "axios";
import { useState } from "react";

export const useNewPassword = () => {
  const [errorMessage, setError] = useState<string | null>(null);
  const mutation = useMutation({
    mutationFn: (password: string) => auth.newPassword(password),
    onSuccess: async (data) => {
      console.log(data.data.user.id);
      // await saveToken(data.data.accessToken);
      //   setUserId(data.data.user.id);
    },
    onError: (err) => {
      if (isAxiosError(err)) {
        console.log(err.response?.data);
        setError(err.response?.data?.message || err.message);
      } else {
        setError(err.message);
      }
    },
  });

  return { ...mutation, errorMessage };
};
