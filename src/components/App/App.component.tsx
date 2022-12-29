import AdviceCard from "../AdviceCard";
import AdviceWrapper from "../AdviceWrapper";
import DarkModeBtn from "../DarkModeBtn";
import Footer from "../Footer";
import HeaderWrapper from "../HeaderWrapper";
import styles from "./App.style.module.scss";

const App = () => {
  return (
    <div className={styles.app}>
      <HeaderWrapper>
        <DarkModeBtn />
      </HeaderWrapper>
      <AdviceWrapper>
        <AdviceCard />
      </AdviceWrapper>
      <Footer />
    </div>
  );
};

export default App;
