import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { getGroupList } from "../services";

const useGetGroupsListQuery = () => {
  return useQuery<any, AxiosError, any>({
    queryFn: () =>
    getGroupList(),
    queryKey: [
      "useGetGroupsListQuery",
    ],
  });
};

export default useGetGroupsListQuery;
