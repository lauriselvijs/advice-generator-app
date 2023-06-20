import { useMemo, useState } from "react";
import { useDebounce } from "react-use";

import { useAdviceDataQuery } from "../../hooks/Advice";

import { BTN_DEBOUNCE_INTERVAL } from "./AdviceGeneratorBtn.config";

const useAdviceGeneratorBtn = () => {
  const { refetch, isFetching } = useAdviceDataQuery();
  const [clicked, setClicked] = useState<boolean>(false);

  useDebounce(
    () => {
      setClicked(false);
    },
    BTN_DEBOUNCE_INTERVAL,
    [clicked]
  );

  const onClick = (): void => {
    refetch();
    setClicked(true);
  };

  const isDebounced = useMemo<boolean>(
    () => clicked || isFetching,
    [isFetching, clicked]
  );

  return {
    isFetching,
    onClick,
    isDebounced,
  };
};

export default useAdviceGeneratorBtn;
