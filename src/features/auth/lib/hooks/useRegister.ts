import { auth } from "../../model/routes";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { useState } from "react";
import useUserIdStore from "../../model/stores/userId";
import { getLocation } from "@/utils/user/getLocation";
export const useRegister = (
  email: string,
  password: string,
  role: "MENTOR" | "USER"
) => {
  const queryClient = useQueryClient();
  const [errorMessage, setError] = useState<string | null>(null);
  const setUserId = useUserIdStore((store) => store.setId);
  const mutation = useMutation({
    mutationFn: () => auth.register(email, password, role),
    onSuccess: async (data) => {
      queryClient.invalidateQueries({
        queryKey: ["profile"]
      });
      await getLocation();
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

  return { ...mutation, errorMessage, setError };
};
