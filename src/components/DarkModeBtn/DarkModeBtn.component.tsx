import { useMemo } from "react";
import { BsCloudMoonFill, BsCloudSunFill } from "react-icons/bs";

import Theme from "../../style/main.scss";
import { useTheme } from "../../hooks/Theme";

import styles from "./DarkModeBtn.module.scss";

const DarkModeBtn = () => {
  const { light } = Theme;
  const { currentTheme, setTheme, setDefaultTheme } = useTheme();

  const onDarkModeBtnClick = () => {
    currentTheme === light ? setDefaultTheme() : setTheme(light);
  };

  const icon = useMemo(
    () =>
      currentTheme ? (
        <BsCloudMoonFill aria-hidden="true" />
      ) : (
        <BsCloudSunFill aria-hidden="true" />
      ),
    [currentTheme]
  );

  return (
    <button
      className={styles.darkModeBtn}
      aria-label="Dark mode"
      onClick={onDarkModeBtnClick}
    >
      {icon}
    </button>
  );
};

export default DarkModeBtn;
