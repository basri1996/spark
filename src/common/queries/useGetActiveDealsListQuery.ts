import { useQuery } from "@tanstack/react-query";
import { IActiveDealsResponse } from "../types";
import { AxiosError } from "axios";
import { getActiveDealsList } from "../services/dealsService";

const useGetActiveDealsListQuery = ({
  dealStatuses,
  ownerExternalIds,
}: {
  dealStatuses: string;
  ownerExternalIds: string;
}) => {
  return useQuery<IActiveDealsResponse, AxiosError, IActiveDealsResponse>({
    queryFn: () => getActiveDealsList({ dealStatuses, ownerExternalIds }),
    queryKey: ["useGetActiveDealsListQuery", dealStatuses, ownerExternalIds],
    enabled: !!ownerExternalIds,
  });
};

export default useGetActiveDealsListQuery;
