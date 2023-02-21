import { useMemo } from "react";
import { PulseLoader } from "react-spinners";

import { useAdviceDataQuery } from "../../hooks/Advice";

import styles from "./AdviceCardContents.style.module.scss";

const AdviceCardContents = () => {
  const {
    data: { slip: { advice } } = { slip: {} },
    isLoading,
    isError,
    error,
    isFetching,
  } = useAdviceDataQuery();

  const { message: errorMsg } = error || {};

  const renderAdvice = useMemo(
    () => (errorMsg ? errorMsg : advice),
    [errorMsg, advice]
  );

  if (isLoading || isFetching) {
    return <PulseLoader />;
  }

  return <p className={styles.adviceCardContents}>{renderAdvice}</p>;
};

export default AdviceCardContents;
