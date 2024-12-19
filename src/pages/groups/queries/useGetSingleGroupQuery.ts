import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { getSingleGroup } from "../services";

const useGetSingleGroupQuery = (id:string | undefined) => {
  return useQuery<any, AxiosError, any>({
    queryFn: () =>
        getSingleGroup(id ??""),
    queryKey: [
      "useGetGroupsListQuery", id,
    ],
  });
};

export default useGetSingleGroupQuery;
