import { useMutation } from "@tanstack/react-query";
import { uploadDeals } from "../service";

const useUploadDealsMutation = () => {
  return useMutation({
    mutationFn: uploadDeals,
    onError: (error) => {},
  });
};

export default useUploadDealsMutation;
