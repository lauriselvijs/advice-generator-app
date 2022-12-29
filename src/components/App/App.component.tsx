import AdviceCard from "../AdviceCard";
import AdviceWrapper from "../AdviceWrapper";
import DarkModeBtn from "../DarkModeBtn";
import Footer from "../Footer";
import HeaderWrapper from "../HeaderWrapper";
import "./App.style.scss";

const App = () => {
  return (
    <div className="app">
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
