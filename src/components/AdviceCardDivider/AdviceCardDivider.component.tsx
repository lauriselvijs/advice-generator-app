import React from "react";
import "./AdviceCardDivider.style.scss";
import PatternDividerDesktop from "../../asset/image/icon/pattern-divider-desktop.svg";
import PatternDividerMobile from "../../asset/image/icon/pattern-divider-mobile.svg";

const AdviceCardDivider = () => {
  return (
    <>
      <img
        width={444}
        height={16}
        className="pattern-divider-desktop"
        src={PatternDividerDesktop}
        alt="Pattern divider desktop"
      />
      <img
        width={295}
        height={16}
        className="pattern-divider-mobile"
        src={PatternDividerMobile}
        alt="Pattern divider mobile"
      />
    </>
  );
};

export default AdviceCardDivider;
