import React from "react";
import "./AdviceGeneratorBtn.style.scss";
import DiceIcon from "../../asset/image/icon/icon-dice.svg";
import { fetchAdvice } from "../../services/Advice.service";

const AdviceGeneratorBtn = () => {
  const onAdviceGeneratorBtn = async () => {
    const advice = await fetchAdvice();
  };

  return (
    <button onClick={onAdviceGeneratorBtn} className="advice-generator-btn">
      <img
        src={DiceIcon}
        alt="Dice icon"
        width={24}
        height={24}
        className="dice-icon"
      />
    </button>
  );
};

export default AdviceGeneratorBtn;
