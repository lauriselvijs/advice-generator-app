import { BsCloudMoonFill, BsCloudSunFill } from "react-icons/bs";

import Theme from "../../style/main.scss";
import { useTheme } from "../../hooks/Theme";

import styles from "./DarkModeBtn.style.module.scss";

const DarkModeBtn = () => {
  const { light } = Theme;
  const { currentTheme, setTheme, setDefaultTheme } = useTheme();

  const onDarkModeBtnClick = () => {
    currentTheme === light ? setDefaultTheme() : setTheme(light);
  };

  const icon = useMemo(
    () =>
      currentTheme ? (
        <BsFillMoonFill aria-hidden="true" />
      ) : (
        <BsFillSunFill aria-hidden="true" />
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
