import styles from "./AdviceGeneratorBtn.module.scss";
import useAdviceGeneratorBtn from "./AdviceGeneratorBtn.hook";

const AdviceGeneratorBtn = () => {
  const { onClick, isFetching } = useAdviceGeneratorBtn();

  return (
    <button
      aria-label="Generate advice"
      onClick={onClick}
      className={styles.adviceGeneratorBtn}
      disabled={isFetching}
    />
  );
};

export default AdviceGeneratorBtn;
