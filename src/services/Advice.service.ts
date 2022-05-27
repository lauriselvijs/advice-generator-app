import axios, { AxiosError } from "axios";
import { ADVICE_FETCH_URL } from "../constants/AdviceFetch.const";

export interface IError {
  errorMsg: string;
}

export const fetchAdvice = async () => {
  try {
    const {
      data: {
        slip: { advice },
      },
    } = await axios.get<IAdvice>(ADVICE_FETCH_URL);

    return advice;
  } catch (err: any) {
    const { message }: AxiosError = err;

    return message;
  }
};
