import { useMemo } from "react";
import { ThreeDots } from "react-loader-spinner";

import { useAdviceDataQuery } from "../../hooks/Advice";

import styles from "./AdviceCardContents.style.module.scss";

const AdviceCardContents = () => {
  const {
    data: { slip: { advice } } = { slip: {} },
    isLoading,
    error,
    isFetching,
  } = useAdviceDataQuery();

  const { message: errorMsg } = error ?? {};

  const renderAdvice = useMemo(
    () => (errorMsg ? errorMsg : advice),
    [errorMsg, advice]
  );

  if (isLoading || isFetching) {
    return <ThreeDots color="var(--color-primary)" />;
  }

  return <p className={styles.adviceCardContents}>{renderAdvice}</p>;
};

export default AdviceCardContents;
