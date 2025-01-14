import { useMutation, useQueryClient } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import mentor from "@/features/mentor/model/routes";

export const useUpdateMentorProfile = () => {
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
    }) => mentor.changeProfile(firstName, lastName, password),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['mentorInfo']
      })
    },
    onError: (err) => {
      if (isAxiosError(err)) {
        alert(err.response?.data.message);
      }
    },
  });
};
