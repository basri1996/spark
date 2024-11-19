import { useQuery } from "@tanstack/react-query";
import { IProductResponse } from "../types";
import { AxiosError } from "axios";
import { getProductUrl } from "../services/commonService";

const useGetLoanProductListQuery = () => {
  return useQuery<IProductResponse, AxiosError, IProductResponse>({
    queryFn: () => getProductUrl(),
    queryKey: ["useGetLoanProductListQuery"],
    staleTime: Infinity,
    gcTime: Infinity,
  });
};

export default useGetLoanProductListQuery;
