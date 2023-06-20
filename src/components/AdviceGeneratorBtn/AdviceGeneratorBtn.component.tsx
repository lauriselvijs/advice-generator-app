import styles from "./AdviceGeneratorBtn.module.scss";
import useAdviceGeneratorBtn from "./AdviceGeneratorBtn.hook";

const AdviceGeneratorBtn = () => {
  const { onClick, isDebounced } = useAdviceGeneratorBtn();

  return (
    <button
      aria-label="Generate advice"
      onClick={onClick}
      className={styles.adviceGeneratorBtn}
      disabled={isDebounced}
    />
  );
};

export default AdviceGeneratorBtn;
