import React from "react";
import "./AdviceCardContents.style.scss";
import AdviceCardDivider from "../AdviceCardDivider";
import Loader from "../Loader";

const AdviceCardContents = () => {
  return (
    <p className="advice-card-contents">
      {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque esse, unde
      id eius iusto culpa vel. Labore. */}
      <Loader />
      <AdviceCardDivider />
    </p>
  );
};

export default AdviceCardContents;
