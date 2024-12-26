import { useMutation, useQueryClient } from "@tanstack/react-query";
import { reviews } from "../../model/routes";
import ReviewCreateDto from "../../model/types/ReviewCreateDto";

const useCreateReview = () => {
   const queryClient = useQueryClient();
   const mutation = useMutation({
      mutationFn: (dto: ReviewCreateDto) => reviews.createReview(dto),
      onSuccess: () => queryClient.invalidateQueries({
         queryKey: ["reviews"]
      }),
      onError: (err) => {
         alert(JSON.stringify(err, null, 2))
      }
   });

   return { ...mutation };
};
export default useCreateReview;