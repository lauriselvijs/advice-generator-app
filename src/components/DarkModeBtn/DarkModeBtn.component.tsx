import themeNames from "../../style/main.scss";
import { useThemeSwitcher } from "../../hooks/Theme.hook";
import { BsCloudMoonFill, BsCloudSunFill } from "react-icons/bs";
import styles from "./DarkModeBtn.style.module.scss";

const DarkModeBtn = () => {
  const { lightTheme } = themeNames;
  const [theme, setTheme] = useThemeSwitcher(lightTheme);

  const onDarkModeBtnClick = () => {
    setTheme(!theme);
  };

  const darkModeBtnIcon = theme ? <BsCloudMoonFill /> : <BsCloudSunFill />;

  return (
    <button
      className={styles.darkModeBtn}
      aria-label="Dark mode"
      onClick={onDarkModeBtnClick}
    >
      {darkModeBtnIcon}
    </button>
  );
};

export default DarkModeBtn;
