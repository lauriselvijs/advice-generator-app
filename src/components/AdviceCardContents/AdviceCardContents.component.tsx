import { useAdviceDataQuery } from "../../hooks/Advice";
import Loader from "../Loader";
import styles from "./AdviceCardContents.style.module.scss";

const AdviceCardContents = () => {
  const { data, isLoading, error, isFetching } = useAdviceDataQuery();

  const { advice } = data?.data.slip || {};
  const { message: errorMsg } = error || {};

  if (isLoading || isFetching) {
    return <Loader />;
  }

  const renderAdvice = errorMsg ? errorMsg : advice;

  return <p className={styles.adviceCardContents}>{renderAdvice}</p>;
};

export default AdviceCardContents;
