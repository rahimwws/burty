import { isAxiosError } from "axios";
import { auth } from "../../model/routes";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { saveTokens } from "@/shared/api/token/storage";
import { useState } from "react";
import useRoleStore from "@/shared/store/role";
import { getLocation } from "@/utils/user/getLocation";
export const useGoogleAuth = () => {
   const queryClient = useQueryClient();
   const [errorMessage, setError] = useState<string | null>(null);
   const setRole = useRoleStore((store) => store.setRole);
   const mutation = useMutation({
      mutationFn: (code: string) => auth.googleAuth(code),
      onSuccess: async (data) => {
         await getLocation();
         console.log(data.data);
         setError(null);
         setRole(data.data.user?.role == "MENTOR" ? "mentor" : "user");
         queryClient.invalidateQueries({
            queryKey: ["profile"]
         });
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
