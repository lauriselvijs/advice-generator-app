import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { fetchAdvice } from "../../services/Advice.service";
import { Advice } from "../../types/Advice";
import { ADVICE_KEY, ADVICE_QUERY_SETTINGS } from "./Advice.config";

export const useAdviceDataQuery = () =>
  useQuery<AxiosResponse<Advice, any>, AxiosError>(
    ADVICE_KEY,
    fetchAdvice,
    ADVICE_QUERY_SETTINGS
  );
