import axios from "axios";
import { ADVICE_FETCH_URL } from "./Advice.config";
import { Advice } from "../../types/Advice.d";

export const fetchAdvice = async (): Promise<Advice> => {
  const { data } = await axios.get<Advice>(ADVICE_FETCH_URL);

  return data;
};
