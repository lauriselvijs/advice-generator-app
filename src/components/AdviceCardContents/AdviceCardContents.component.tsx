import React from "react";
import { useAdviceDataQuery } from "../../query/Advice.query.hook";
import { QUERY_ERROR, QUERY_LOADING } from "../../query/Setup.query";
import Loader from "../Loader";
import "./AdviceCardContents.style.scss";

const AdviceCardContents = () => {
  const { data, status } = useAdviceDataQuery();

  if (status === QUERY_LOADING) {
    return (
      <>
        <Loader />
      </>
    );
  }

  return <p className="advice-card-contents">{data}</p>;
};

export default AdviceCardContents;
