import { useQuery } from "@tanstack/react-query";
import { IStatusesResponse } from "../types";
import { AxiosError } from "axios";
import { getDealStatuses } from "../services/commonService";

const useGetDealStatusListQuery = () => {
  return useQuery<IStatusesResponse, AxiosError, IStatusesResponse>({
    queryFn: () => getDealStatuses(),
    queryKey: ["useGetDealStatusListQuery"],
    staleTime: Infinity,
    gcTime: Infinity,
  });
};

export default useGetDealStatusListQuery;
