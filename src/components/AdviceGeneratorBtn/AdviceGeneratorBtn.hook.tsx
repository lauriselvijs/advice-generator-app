import { useAdviceDataQuery } from "../../hooks/Advice";

const useAdviceGeneratorBtn = () => {
  const { refetch, isFetching } = useAdviceDataQuery();

  const onClick = (): void => {
    refetch();
  };

  return {
    isFetching,
    onClick,
  };
};

export default useAdviceGeneratorBtn;
