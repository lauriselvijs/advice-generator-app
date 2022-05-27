import { QueryClient } from "react-query";

export const queryClient = new QueryClient();

export const QUERY_LOADING = "loading";
export const QUERY_ERROR = "error";
export const QUERY_IDLE = "idle";
