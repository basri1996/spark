import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { changeTags } from "../service";

const useChangeTagsMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: changeTags,
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

export default useChangeTagsMutation;
