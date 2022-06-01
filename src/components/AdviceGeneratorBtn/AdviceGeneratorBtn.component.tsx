import React from "react";
import "./AdviceGeneratorBtn.style.scss";
import DiceIcon from "../../asset/image/icon/icon-dice.svg";
import { useAdviceDataQuery } from "../../query/Advice/Advice.query.hook";

const AdviceGeneratorBtn = () => {
  const { refetch } = useAdviceDataQuery();

  const onAdviceGeneratorBtn = () => {
    refetch();
  };

  return (
    <button
      aria-label="generate advice"
      onClick={onAdviceGeneratorBtn}
      className="advice-generator-btn"
    >
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
