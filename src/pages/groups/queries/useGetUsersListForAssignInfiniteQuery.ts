import { useInfiniteQuery, InfiniteData } from "@tanstack/react-query";
import { getUsersList } from "../services";

interface User {
  externalId: string;
  fullName: string;
}

interface UsersResponse {
  currentPage: number;
  totalPages: number;
  content: User[];
}

interface UseGetUsersListForAssignInfiniteQueryProps {
  keyword: string;
}

const useGetUsersListForAssignInfiniteQuery = ({
  keyword,
}: UseGetUsersListForAssignInfiniteQueryProps) => {
  return useInfiniteQuery<UsersResponse, Error, User[], [string, string], number>({
    queryKey: ["useGetUsersListForAssignInfiniteQuery", keyword],
    queryFn: async ({ pageParam = 0 }) => {
      return getUsersList({ page: pageParam, keyword });
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage: UsersResponse) => {
      return lastPage.totalPages - 1 > lastPage.currentPage ? lastPage.currentPage + 1 : null;
    },
    select: (data: InfiniteData<UsersResponse>) => {
      return data.pages.flatMap((page) => page.content);
    },
  });
};

export default useGetUsersListForAssignInfiniteQuery;
