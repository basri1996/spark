import { useQuery } from "@tanstack/react-query";
import { ISubStatusResponse } from "../types";
import { AxiosError } from "axios";
import { getSubStatuses } from "../services/commonService";

const useGetSubStatusListQuery = () => {
  return useQuery<ISubStatusResponse, AxiosError, ISubStatusResponse>({
    queryFn: () => getSubStatuses(),
    queryKey: ["useGetSubStatusListQuery"],
    staleTime: Infinity,
    gcTime: Infinity,
  });
};

export default useGetSubStatusListQuery;


