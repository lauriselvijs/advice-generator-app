import { ADVICE_TITLE } from "./AdviceCardTitle.config";
import { useAdviceDataQuery } from "../../hooks/Advice";
import styles from "./AdviceCardTitle.module.scss";

const AdviceCardTitle = () => {
  const { data: { slip: { id: adviceNumber } } = { slip: {} } } =
    useAdviceDataQuery();

  return (
    <h1 className={styles.adviceCardTitle}>
      {ADVICE_TITLE}
      {adviceNumber}
    </h1>
  );
};

export default AdviceCardTitle;
