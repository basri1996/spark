import { api } from "../../config/api";
import { dealsUrl, activeDealsUrl } from "../../constant";
import { serializeParams } from "../../utils";
import { IDealsListParams } from "../types";

export const getDealsList = async (params: IDealsListParams) => {

  const response = await api.get(`${dealsUrl}?${serializeParams(params)}`);

  return response?.data;
};

export const getActiveDealsList = async (params: {
  dealStatuses: string;
  ownerExternalIds: string;
  searchText: string;
  productCodes: string[];
  progressSubStatuses: string[];
}) => {
 
  const response = await api.get(`${activeDealsUrl}?${serializeParams(params)}`);
  return response?.data;
};

export const getSingleDeal = async ({ id }: { id: string }) => {
  const response = await api.get(`${dealsUrl}/${id}`);
  return response?.data;
};
