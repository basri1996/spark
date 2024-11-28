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
        productCodes,
        progressSubStatuses,
      }),
    queryKey: [
      "useGetActiveDealsListQuery",
      dealStatuses,
      ownerExternalIds,
      searchText,
      productCodes,
      progressSubStatuses,
    ],
    enabled: !!ownerExternalIds,
  });
};

export default useGetActiveDealsListQuery;
