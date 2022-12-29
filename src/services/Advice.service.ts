import axios from "axios";
import { ADVICE_FETCH_URL } from "../constants/AdviceFetch.const";

export const fetchAdvice = async () => {
  const data = await axios.get<Advice>(ADVICE_FETCH_URL);

  return data;
};
