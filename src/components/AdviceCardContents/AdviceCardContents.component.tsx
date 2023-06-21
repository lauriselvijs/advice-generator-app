import { ThreeDots } from "react-loader-spinner";
import Typewriter from "typewriter-effect";

import styles from "./AdviceCardContents.style.module.scss";
import useAdviceCardContents from "./AdviceCardContents.hook";

const AdviceCardContents = () => {
  const { isFetching, advice } = useAdviceCardContents();

  if (isFetching) {
    return <ThreeDots color="var(--color-primary)" />;
  }

  return (
    <Typewriter
      options={{
        wrapperClassName: styles.adviceCardContents,
        strings: [advice],
        autoStart: true,
        loop: false,
        cursor: "",
        deleteSpeed: Infinity,
      }}
    />
  );
};

export default AdviceCardContents;
