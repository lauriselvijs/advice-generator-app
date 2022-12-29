import AdviceCardTitle from "../AdviceCardTitle/";
import AdviceCardContents from "../AdviceCardContents";
import styled from "./AdviceCard.style.module.scss";
import AdviceGeneratorBtn from "../AdviceGeneratorBtn";
import AdviceCardDivider from "../AdviceCardDivider";

const AdviceCard = () => {
  return (
    <div className={styled.adviceCard}>
      <AdviceCardTitle />
      <AdviceCardContents />
      <AdviceCardDivider />
      <AdviceGeneratorBtn />
    </div>
  );
};

export default AdviceCard;
