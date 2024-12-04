import { useMutation } from "@tanstack/react-query";
import { CreateLead } from "../service";

const useCreateLeadMutation = () => {
  return useMutation({
    mutationFn: CreateLead,
    onSuccess: () => {},
    onError: (error) => {},
  });
};

export default useCreateLeadMutation;
