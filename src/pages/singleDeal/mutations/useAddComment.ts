import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import {  CreateComment } from "../service";

const useAddComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: CreateComment,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["useGetDealCommentListQuery"],
        type: "active",
        stale: true,
      });
    },
    onError: (error) => {},
  });
};

export default useAddComment;
