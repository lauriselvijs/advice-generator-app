import { useAdviceDataQuery } from "../../hooks/Advice";

import styles from "./AdviceGeneratorBtn.style.module.scss";

const AdviceGeneratorBtn = () => {
  const { refetch, isFetching } = useAdviceDataQuery();

  const onAdviceGeneratorBtn = () => {
    refetch();
  };

  return (
    <button
      aria-label="Generate advice"
      onClick={onAdviceGeneratorBtn}
      className={styles.adviceGeneratorBtn}
      disabled={isFetching}
    />
  );
};

export default AdviceGeneratorBtn;
