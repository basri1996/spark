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
  ownerExternalIds,
  searchText,
  productCodes,
  progressSubStatuses
}: {
  dealStatuses: string;
  ownerExternalIds: string;
  searchText:string;
  productCodes:string[];
  progressSubStatuses:string[]
}) => {
  const response = await api.get(activeDealsUrl, {
    params: {
      dealStatuses,
      ownerExternalIds,
      searchText,
      productCodes,
      progressSubStatuses
    },
  });
  return response?.data;
};

export const getSingleDeal = async ({ id }: { id: string }) => {
  const response = await api.get(`${dealsUrl}/${id}`);
  return response?.data;
};
