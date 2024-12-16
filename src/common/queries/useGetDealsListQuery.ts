import { useQuery } from "@tanstack/react-query";
import { IDealsListParams, IDealsResponseTypes } from "../types";
import { AxiosError } from "axios";
import { getDealsList } from "../services/dealsService";

const useGetDealsListQuery = (params: IDealsListParams) => {
  return useQuery<IDealsResponseTypes, AxiosError, IDealsResponseTypes>({
    queryFn: () =>
      getDealsList({
        ...params,
        pageNumber: params.pageNumber - 1,
      }),
    queryKey: [
      "useGetDealsListQuery",
      ...Object.entries(params).map(([_, value]) => value),
    ],
  });
};

export default useGetDealsListQuery;
