import { QueryClient, DefaultOptions } from "@tanstack/react-query";

const defaultOptions: DefaultOptions = {
  queries: {
    refetchOnWindowFocus: false,
    retry: false,
    retryOnMount: false,
  },
  mutations: {
    onError: (error: unknown) => {
      console.error(error);
    },
  },
};

const queryClient = new QueryClient({
  defaultOptions,
});

export default queryClient;
