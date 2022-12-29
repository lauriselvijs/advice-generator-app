import styles from "./Loader.style.module.scss";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.spinner} />
    </div>
  );
};

export default Loader;
