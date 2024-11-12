import { api } from "../../api/api";
import { dealsUrl, activeDealsUrl } from "../../api/constants";
import { IDealsListParams } from "../types";

export const getDealsList = async ({
  dealStatuses,
  ownerExternalIds,
  pageNumber,
  pageSize,
  progressStatuses,
  searchText,
}: IDealsListParams) => {
  const response = await api.get(dealsUrl, {
    params: {
      dealStatuses,
      ownerExternalIds,
      pageNumber,
      pageSize,
      progressStatuses,
      searchText,
    },
  });
  return response?.data;
};

export const getActiveDealsList = async ({
  dealStatuses,
}: {
  dealStatuses: string[];
}) => {
  const response = await api.get(activeDealsUrl, {
    params: {
      dealStatuses,
    },
  });
  return response?.data;
};

export const getSingleDeal = async ({ id }: { id: string }) => {
  const response = await api.get(`${dealsUrl}/${id}`);
  return response?.data;
};
