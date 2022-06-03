import React from "react";
import { ADVICE_TITLE } from "../../constants/Advice.const";
import { useAdviceDataQuery } from "../../query/Advice/Advice.query.hook";
import "./AdviceCardTitle.style.scss";

const AdviceCardTitle = () => {
  const { data } = useAdviceDataQuery();

  const { id } = data?.data.slip || {};

  return (
    <h1 className="advice-card-title">
      {ADVICE_TITLE}
      {id}
    </h1>
  );
};

export default AdviceCardTitle;
