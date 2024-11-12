import { useQuery } from "@tanstack/react-query";
import { ISingleDealResponse } from "../types";
import { AxiosError } from "axios";
import { getSingleDeal } from "../services/dealsService";

const useGetSingleDealQuery = ({ id }: { id: string | undefined }) => {
  return useQuery<ISingleDealResponse, AxiosError, ISingleDealResponse>({
    queryFn: () => getSingleDeal({ id: id ?? "" }),
    queryKey: ["useGetSingleDealQuery", id],
    enabled: !!id,
  });
};

export default useGetSingleDealQuery;
