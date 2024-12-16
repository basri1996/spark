import { useQuery } from "@tanstack/react-query";
import { IBranchesResponse } from "../types";
import { AxiosError } from "axios";
import { getUsersList } from "../services/commonService";

const useGetSparkUsersListQuery = () => {
  return useQuery<IBranchesResponse, AxiosError, IBranchesResponse>({
    queryFn: () => getUsersList(),
    queryKey: ["useGetSparkUsersListQuery"],
    staleTime: Infinity,
    gcTime: Infinity,
  });
};

export default useGetSparkUsersListQuery;
