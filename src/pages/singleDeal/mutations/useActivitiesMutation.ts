import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { dealActivities } from "../service";

const useActivitiesMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: dealActivities,
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

export default useActivitiesMutation;
