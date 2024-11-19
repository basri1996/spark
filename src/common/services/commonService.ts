import { api } from "../../api/api";
import { branchesUrl, productUrl, statusesUrl } from "../../api/constants";

export const getDealStatuses = async () => {
  const response = await api.get(`${statusesUrl}`);
  return response?.data;
};

export const getProductUrl = async () => {
  const response = await api.get(`${productUrl}`);
  return response?.data;
};

export const getBranchesList = async () => {
  const response = await api.get(`${branchesUrl}`);
  return response?.data;
};
