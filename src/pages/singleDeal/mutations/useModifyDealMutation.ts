import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { ModifyDeal } from "../service";

const useModifyDealMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ModifyDeal,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["useGetSingleDealQuery"],
        type: "active",
        stale: true,
      });
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export default useModifyDealMutation;
