import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { getComments } from "../service";
import { ICommentResponse } from "../types";

const useGetDealCommentListQuery = ({ id }: { id: string | undefined }) => {
  return useQuery<ICommentResponse, AxiosError, ICommentResponse>({
    queryFn: () => getComments(id ?? ""),
    queryKey: ["useGetDealCommentListQuery", id],
  });
};

export default useGetDealCommentListQuery;
