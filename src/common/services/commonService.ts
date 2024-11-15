import { api } from "../../api/api";
import { statusesUrl } from "../../api/constants";

export const getDealStatuses = async () => {
  const response = await api.get(`${statusesUrl}`);
  return response?.data;
};
