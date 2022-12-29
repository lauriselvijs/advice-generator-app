import { ADVICE_TITLE } from "../../constants/Advice.const";
import { useAdviceDataQuery } from "../../hooks/Advice";
import "./AdviceCardTitle.style.scss";

const AdviceCardTitle = () => {
  const { data } = useAdviceDataQuery();

  const { id: adviceNumber } = data?.data.slip || {};

  return (
    <h1 className="advice-card-title">
      {ADVICE_TITLE}
      {adviceNumber}
    </h1>
  );
};

export default AdviceCardTitle;
