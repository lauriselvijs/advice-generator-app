import { useMemo } from "react";
import { useAdviceDataQuery } from "../../hooks/Advice";

const useAdviceCardContents = () => {
  const { data, error, isFetching } = useAdviceDataQuery();

  const advice = useMemo(
    () => error?.message ?? data?.slip.advice,
    [error, data]
  );

  return {
    advice,
    isFetching,
  };
};

export default useAdviceCardContents;
