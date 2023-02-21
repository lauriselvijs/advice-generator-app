import AdviceCard from "../AdviceCard";
import Author from "../Author";
import DarkModeBtn from "../DarkModeBtn";

import styles from "./App.style.module.scss";

const App = () => {
  return (
    <div className={styles.app}>
      <header>
        <DarkModeBtn />
      </header>
      <main>
        <AdviceCard />
      </main>
      <footer>
        <Author />
      </footer>
    </div>
  );
};

export default App;
