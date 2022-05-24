import React from "react";
import "./DarkModeBtn.style.scss";
import Theme from "../../style/main.scss";
import { useThemeSwitcher } from "../../hooks/Theme.hook";

const DarkModeBtn = () => {
  const { darkTheme } = Theme;
  const [isDarkThemeSet, setIsDarkThemeSet] = useThemeSwitcher(darkTheme);

  const onDarkModeBtnClick = () => {
    setIsDarkThemeSet(!isDarkThemeSet);
  };

  return (
    <button className="dark-mode-btn" onClick={onDarkModeBtnClick}>
      DarkModeBtn
    </button>
  );
};

export default DarkModeBtn;
