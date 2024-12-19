import { api } from "../../config/api";
import { allUsersUrl, groupsUrl } from "../../constant";

export const getGroupList = async () => {
  const response = await api.get(groupsUrl);
  return response.data;
};

export const getSingleGroup = async (id: string) => {
  const response = await api.get(`${groupsUrl}/${id}`);
  return response.data;
};

export const CreateGroup = async (data: any) => {
  const response = await api.post(groupsUrl, data);
  return response.data;
};

export interface User {
  externalId: string;
  fullName: string;
}

export interface UsersResponse {
  currentPage: number;
  totalPages: number;
  content: User[];
}

export const getUsersList = async ({
  page,
  keyword,
}: {
  page: number;
  keyword: string;
}): Promise<UsersResponse> => {
  const response = await api.get(allUsersUrl, {
    params: {
      pageNumber: page,
      searchText: keyword,
      pageSize: 10,
    },
  });

  return {
    content: response.data.content,
    totalPages: response.data.totalPages,
    currentPage: page,
  };
};
