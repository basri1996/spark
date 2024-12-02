import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { getCallCenterDealsList } from "../service";
import { IDealsResponseTypes } from "../../../common/types";

export interface CallCenterDealsParams {
  pageNumber: number;
  pageSize: number;
  searchText?: string;
}

const useGetCallCenterLeadListQuery = ({
  pageNumber,
  pageSize,
  searchText,
}: CallCenterDealsParams) => {
  return useQuery<IDealsResponseTypes, AxiosError, IDealsResponseTypes>({
    queryFn: () => getCallCenterDealsList({ pageNumber, pageSize, searchText }),
    queryKey: [
      "useGetCallCenterLeadListQuery",
      pageNumber,
      pageSize,
      searchText,
    ],
    enabled: !!searchText,
  });
};

export default useGetCallCenterLeadListQuery;
