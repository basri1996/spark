import { useMutation } from "@tanstack/react-query";
import { uploadDeals } from "../service";

const useUploadDealsMutation = () => {
  return useMutation({
    mutationFn: uploadDeals,
  });
};

export default useUploadDealsMutation;
