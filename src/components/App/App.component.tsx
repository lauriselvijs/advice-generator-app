import React from "react";
import DarkModeBtn from "../DarkModeBtn";
import Footer from "../Footer";
import "./App.style.scss";

const App = () => {
  return (
    <div className="app">
      <DarkModeBtn />
      <Footer />
    </div>
  );
};

export default App;
