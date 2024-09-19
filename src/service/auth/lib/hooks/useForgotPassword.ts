import { useState } from "react";
import useUserIdStore from "../../model/stores/userId";
import { auth } from "../../model/routes";
import { useMutation } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { saveTokens } from "@/shared/api/token/storage";

export const useForgotPassword = () => {
  const setUserId = useUserIdStore((store) => store.setId);
  const mutation = useMutation({
    mutationFn: (email: string) => auth.forgotPassword(email),
    onSuccess: async (data) => {
      console.log(data.data);
      // await saveToken(data.data.accessToken);
      setUserId(data.data.id);
    },
    onError: (error) => {
      if (isAxiosError(error)) {
        alert(error.response?.data.message);
      } else {
      }
    },
  });

  return { ...mutation };
};

export const useVerifyPassword = (id: string) => {
  const mutation = useMutation({
    mutationFn: (code: string) => auth.verifyPassword(id, code),
  });

  return { ...mutation };
};
