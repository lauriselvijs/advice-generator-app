import axios from "axios";
import { ADVICE_FETCH_URL } from "../constants/AdviceFetch.const";
import { Advice } from "../types/Advice";

export const fetchAdvice = async () => {
  const data = await axios.get<Advice>(ADVICE_FETCH_URL);

  return data;
};
