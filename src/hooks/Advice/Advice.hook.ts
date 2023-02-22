import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { adviceService } from "../../services/Advice";
import { Advice } from "../../types/Advice.d";
import { ADVICE_KEY } from "./Advice.config";

const { fetchAdvice } = adviceService;

export const useAdviceDataQuery = () =>
  useQuery<Advice, AxiosError>(ADVICE_KEY, fetchAdvice, {
    retry: false,
    refetchOnWindowFocus: false,
  });
