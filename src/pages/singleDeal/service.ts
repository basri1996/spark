import { api } from "../../config/api";
import { dealsUrl } from "../../constant";
import {
  IActivityObject,
  IModifyData,
  IStatusChangeObject,
  ITagsObject,
} from "./types";

export const ModifyDeal = async ({
  id,
  data,
}: {
  id: string | undefined;
  data: IModifyData;
}) => {
  const response = await api.put(`${dealsUrl}/${id}`, data);
  return response?.data;
};

export const dealActivities = async ({
  id,
  data,
}: {
  id: string | undefined;
  data: IActivityObject;
}) => {
  const response = await api.post(`${dealsUrl}/${id}/activities`, data);
  return response?.data;
};

export const changeStatus = async ({
  id,
  data,
}: {
  id: string | undefined;
  data: IStatusChangeObject;
}) => {
  const response = await api.post(`${dealsUrl}/${id}/status`, data);
  return response?.data;
};

export const changeTags = async ({
  id,
  data,
}: {
  id: string | undefined;
  data: ITagsObject;
}) => {
  const response = await api.post(`${dealsUrl}/${id}/tags`, data);
  return response?.data;
};
