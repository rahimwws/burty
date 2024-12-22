import { useMutation, useQueryClient } from "@tanstack/react-query";
import { reviews } from "../../model/routes";
import ReviewCreateDto from "../../model/types/ReviewCreateDto";

const useCreateReview = () => {
   const queryClient = useQueryClient();
   const mutation = useMutation({
      mutationFn: (dto: ReviewCreateDto) => reviews.createReview(dto),
      onSuccess: () => queryClient.invalidateQueries({
         queryKey: ["reviews"]
      })
   });

   return { ...mutation };
};
export default useCreateReview;