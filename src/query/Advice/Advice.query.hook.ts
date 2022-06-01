import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { fetchAdvice } from "../../services/Advice.service";
import { ADVICE_KEY, ADVICE_QUERY_SETTINGS } from "./Advice.query.const";

export const useAdviceDataQuery = () =>
  useQuery<AxiosResponse<IAdvice, any>, AxiosError>(
    ADVICE_KEY,
    fetchAdvice,
    ADVICE_QUERY_SETTINGS
  );
