import { useAdviceDataQuery } from "../../hooks/Advice";
import Loader from "../Loader";
import "./AdviceCardContents.style.scss";

const AdviceCardContents = () => {
  const { data, isLoading, error, isFetching } = useAdviceDataQuery();

  const { advice } = data?.data.slip || {};
  const { message: errorMsg } = error || {};

  if (isLoading || isFetching) {
    return <Loader />;
  }

  return <p className="advice-card-contents">{errorMsg ? errorMsg : advice}</p>;
};

export default AdviceCardContents;
