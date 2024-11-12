import { useQuery } from "@tanstack/react-query";
import { IActiveDealsResponse } from "../types";
import { AxiosError } from "axios";
import { getActiveDealsList } from "../services/dealsService";

const useGetActiveDealsListQuery = ({
  dealStatuses,
}: {
  dealStatuses: string[];
}) => {
  return useQuery<IActiveDealsResponse, AxiosError, IActiveDealsResponse>({
    queryFn: () => getActiveDealsList({ dealStatuses }),
    queryKey: ["useGetActiveDealsListQuery", dealStatuses],
  });
};

export default useGetActiveDealsListQuery;
