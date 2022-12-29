import styles from "./AdviceGeneratorBtn.style.module.scss";
import { useAdviceDataQuery } from "../../hooks/Advice";

const AdviceGeneratorBtn = () => {
  const { refetch, isFetching } = useAdviceDataQuery();

  const onAdviceGeneratorBtn = () => {
    refetch();
  };

  const disabled = isFetching ? true : false;

  return (
    <button
      aria-label="Generate advice"
      onClick={onAdviceGeneratorBtn}
      className={styles.adviceGeneratorBtn}
      disabled={disabled}
    />
  );
};

export default AdviceGeneratorBtn;
