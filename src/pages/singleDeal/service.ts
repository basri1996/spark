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


export const getComments = async(id:string)=>{
  const response = await api.get(`${dealsUrl}/${id}/comments`);
  return response?.data;
}


export const CreateComment = async ({
  userExternalId,
  text,
  id
}: {
  id: string | undefined;
  userExternalId:string 
  text: string;
}) => {
  const response = await api.post(`${dealsUrl}/${id}/comments`, {text},{
    headers: {
      "userExternalId": userExternalId,
    },
  });
  return response?.data;
};

