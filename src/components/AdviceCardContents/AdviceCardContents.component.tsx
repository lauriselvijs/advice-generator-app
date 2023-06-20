import { ThreeDots } from "react-loader-spinner";

import styles from "./AdviceCardContents.style.module.scss";
import useAdviceCardContents from "./AdviceCardContents.hook";

const AdviceCardContents = () => {
  const { isFetching, advice } = useAdviceCardContents();

  if (isFetching) {
    return <ThreeDots color="var(--color-primary)" />;
  }

  return <p className={styles.adviceCardContents}>{advice}</p>;
};

export default AdviceCardContents;
