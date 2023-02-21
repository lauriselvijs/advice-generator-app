import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { adviceService } from "../../services/Advice";
import { Advice } from "../../types/Advice.d";
import { ADVICE_KEY, ADVICE_QUERY_SETTINGS } from "./Advice.config";

const { fetchAdvice } = adviceService;

export const useAdviceDataQuery = () =>
  useQuery<Advice, AxiosError<Advice, any>>(
    ADVICE_KEY,
    fetchAdvice,
    ADVICE_QUERY_SETTINGS
  );
