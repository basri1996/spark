import { useQuery } from "@tanstack/react-query";

import { IDealsListParams, IDealsResponseTypes } from "../types";
import { AxiosError } from "axios";
import { getDealsList } from "../services/dealsService";

const useGetDealsListQuery = ({
  dealStatuses,
  ownerExternalIds,
  pageNumber,
  pageSize,
  progressStatuses,
  searchText,
}: IDealsListParams) => {
  return useQuery<IDealsResponseTypes, AxiosError, IDealsResponseTypes>({
    queryFn: () =>
      getDealsList({
        dealStatuses,
        ownerExternalIds,
        pageNumber,
        pageSize,
        progressStatuses,
        searchText,
      }),
    queryKey: [
      "useGetDealsListQuery",
      dealStatuses,
      ownerExternalIds,
      pageNumber,
      pageSize,
      progressStatuses,
      searchText,
    ],
  });
};

export default useGetDealsListQuery;
