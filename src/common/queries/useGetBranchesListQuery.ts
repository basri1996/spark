import { useQuery } from "@tanstack/react-query";
import { IBranchesResponse } from "../types";
import { AxiosError } from "axios";
import { getBranchesList } from "../services/commonService";

const useGetBranchesListQuery = () => {
  return useQuery<IBranchesResponse, AxiosError, IBranchesResponse>({
    queryFn: () => getBranchesList(),
    queryKey: ["useGetBranchesListQuery"],
    staleTime: Infinity,
    gcTime: Infinity,
  });
};

export default useGetBranchesListQuery;
