import { useQuery } from "@tanstack/react-query";
import { IActiveDealsResponse } from "../types";
import { AxiosError } from "axios";
import { getActiveDealsList } from "../services/dealsService";

const useGetActiveDealsListQuery = ({
  dealStatuses,
  ownerExternalIds,
  searchText,
  productCodes,
  progressSubStatuses,
}: {
  dealStatuses: string;
  ownerExternalIds: string;
  searchText: string;
  productCodes: string[];
  progressSubStatuses: string[];
}) => {
  return useQuery<IActiveDealsResponse, AxiosError, IActiveDealsResponse>({
    queryFn: () =>
      getActiveDealsList({
        dealStatuses,
        ownerExternalIds,
        searchText,
        productCodes:["1","3"],
        progressSubStatuses:["1","3"],
      }),
    queryKey: [
      "useGetActiveDealsListQuery",
      dealStatuses,
      ownerExternalIds,
      searchText,
    ],
    enabled: !!ownerExternalIds,
  });
};

export default useGetActiveDealsListQuery;
