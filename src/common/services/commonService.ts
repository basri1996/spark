import { api } from "../../config/api";
import {
  branchesUrl,
  productUrl,
  statusesUrl,
  subStatusUrl,
  channelUrl,
  usersUrl,
} from "../../constant";

export const getDealStatuses = async () => {
  const response = await api.get(`${statusesUrl}`);
  return response?.data;
};

export const getProductUrl = async () => {
  const response = await api.get(`${productUrl}`);
  return response?.data;
};
export const getSubStatuses = async () => {
  const response = await api.get(`${subStatusUrl}`);
  return response?.data;
};

export const getBranchesList = async () => {
  const response = await api.get(`${branchesUrl}`);
  return response?.data;
};

export const getChannelList = async () => {
  const response = await api.get(`${channelUrl}`);
  return response?.data;
};

export const getUsersList = async () => {
  const response = await api.get(`${usersUrl}`);
  return response?.data;
};
