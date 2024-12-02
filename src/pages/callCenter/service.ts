import { api } from "../../config/api";
import { dealsUrl } from "../../constant";
import { CallCenterDealsParams } from "./queries/useGetCallCenterLeadListQuery";

export const getCallCenterDealsList = async ({
    pageNumber,
    pageSize,
    searchText,
  }: CallCenterDealsParams) => {
    const response = await api.get(dealsUrl, {
      params: {
        pageNumber,
        pageSize,
        searchText,
      },
    });
    return response?.data;
  };