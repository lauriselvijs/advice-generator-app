import React from "react";
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
        <div>Title</div>
      </HeaderWrapper>
      <AdviceWrapper>
        <AdviceCard />
        <div>Advice Card 2</div>
      </AdviceWrapper>
      <Footer />
    </div>
  );
};

export default App;
