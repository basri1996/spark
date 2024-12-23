import { api } from "../../config/api";
import { fileuploadUrl } from "../../constant";

export const uploadDeals = async (file: File[]) => {
  const formData = new FormData();
  formData.append("file", file[0]);
  formData.append("fileName", file[0].name);
  const response = await api.post(fileuploadUrl, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response?.data;
};
