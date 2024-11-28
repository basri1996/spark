import { api } from "../../api/api";
import { fileuploadUrl } from "../../api/constants";

export const uploadDeals = async (file: File[] ) => {
  const formData = new FormData();
  formData.append("file", file[0]);
  formData.append("fileName", file[0].name);
  const response = await api.post(fileuploadUrl, formData);
  return response?.data;
};
