import React from "react";
import Theme from "../../style/main.scss";
import { useThemeSwitcher } from "../../hooks/Theme.hook";
import { BsCloudMoonFill, BsCloudSunFill } from "react-icons/bs";

const DarkModeBtn = () => {
  const { lightTheme } = Theme;
  const [theme, setTheme] = useThemeSwitcher(lightTheme);

  const onDarkModeBtnClick = () => {
    setTheme(!theme);
  };

  return (
    <button aria-label="dark mode" onClick={onDarkModeBtnClick}>
      {theme ? <BsCloudMoonFill /> : <BsCloudSunFill />}
    </button>
  );
};

export default DarkModeBtn;
