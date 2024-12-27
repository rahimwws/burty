import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "@/shared/ui/Toast";
import comments from "../../model/routes/comment";
import { CommentCreateDto } from "../../model/types";

const useCreateComment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (dto: CommentCreateDto) => comments.createComment(dto),
    onSuccess: async (data) => {
      queryClient.invalidateQueries({
        queryKey: ['comments']
      })
    },
    onError: (error) => {
      toast.show({
        type: 'error',
        description: 'Cannot create comment'
      })
    },
  });
};

export default useCreateComment;