import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { changeStatus } from "../service";

const useChangeStatusMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: changeStatus,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["useGetSingleDealQuery"],
        type: "active",
        stale: true,
      });
    },
    onError: (error) => {},
  });
};

export default useChangeStatusMutation;
