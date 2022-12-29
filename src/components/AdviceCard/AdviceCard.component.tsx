import AdviceCardTitle from "../AdviceCardTitle/";
import AdviceCardContents from "../AdviceCardContents";
import "./AdviceCard.style.scss";
import AdviceGeneratorBtn from "../AdviceGeneratorBtn";
import AdviceCardDivider from "../AdviceCardDivider";

const AdviceCard = () => {
  return (
    <div className="advice-card">
      <AdviceCardTitle />
      <AdviceCardContents />
      <AdviceCardDivider />
      <AdviceGeneratorBtn />
    </div>
  );
};

export default AdviceCard;
