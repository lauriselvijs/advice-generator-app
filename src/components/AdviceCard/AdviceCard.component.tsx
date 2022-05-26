import React from "react";
import AdviceCardTitle from "../AdviceCardTitle/";
import AdviceCardContents from "../AdviceCardContents";
import "./AdviceCard.style.scss";
import AdviceGeneratorBtn from "../AdviceGeneratorBtn";

const AdviceCard = () => {
  return (
    <div className="advice-card">
      <AdviceCardTitle />
      <AdviceCardContents />
      <AdviceGeneratorBtn />
    </div>
  );
};

export default AdviceCard;
