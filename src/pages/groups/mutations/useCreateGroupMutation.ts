import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { CreateGroup } from "../services";

const useCreateGroupMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: CreateGroup,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["useGetGroupsListQuery"],
        type: "active",
        stale: true,
      });
    },
    onError: (error) => {},
  });
};

export default useCreateGroupMutation;
