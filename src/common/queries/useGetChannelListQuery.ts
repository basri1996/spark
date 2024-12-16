import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { getChannelList } from "../services/commonService";

const useGetChannelListQuery = () => {
  return useQuery<any, AxiosError, any>({
    queryFn: () => getChannelList(),
    queryKey: ["useGetChannelListQuery"],
    staleTime: Infinity,
    gcTime: Infinity,
    select: (data) =>
      data.map((el: string) => ({
        name: el,
        id: el,
      })),
  });
};

export default useGetChannelListQuery;
