import { useQuery } from "@tanstack/react-query";
import { IProductResponse } from "../types";
import { AxiosError } from "axios";
import { getDealStatuses } from "../services/commonService";

const useGetLoanProductListQuery = () => {
  return useQuery<IProductResponse, AxiosError, IProductResponse>({
    queryFn: () => getDealStatuses(),
    queryKey: ["useGetLoanProductListQuery"],
    staleTime: Infinity,
    gcTime: Infinity,
  });
};

export default useGetLoanProductListQuery;
