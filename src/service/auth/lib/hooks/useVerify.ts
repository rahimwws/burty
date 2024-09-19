import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { auth } from "../../model/routes";
import { isAxiosError } from "axios";
import { saveTokens } from "@/shared/api/token/storage";

export const useVerify = (id: string) => {
  const mutation = useMutation({
    mutationFn: (code: string) => auth.verify(id, code),
    onSuccess: async (data) => {
      await saveTokens(data.data.accessToken, data.data.refreshToken);
    },
    onError: (error) => {
      if (isAxiosError(error)) {
        console.log(error.response?.data);

        alert(error.response?.data?.message || error.message);
      } else {
        alert(error.message);
      }
    },
  });

  return { ...mutation };
};
