import { useEffect, useLayoutEffect, useState } from "react";
import { isBoolean } from "../utils/Types.util";

export const useThemeSwitcher = (
  themeName: string
): [boolean, React.Dispatch<React.SetStateAction<boolean>>] => {
  const [theme, setTheme] = useState<boolean>(false);

  useLayoutEffect(() => {
    const storedTheme = JSON.parse(localStorage.getItem(themeName) || "{}");

    if (isBoolean(storedTheme) && storedTheme) {
      setTheme(true);
      document.body.className = themeName;
    }
  }, []);

  useEffect(() => {
    if (theme) {
      document.body.className = themeName;

      localStorage.setItem(themeName, JSON.stringify(theme));
    } else if (!theme) {
      localStorage.removeItem(themeName);
      document.body.className = "";
    }
  }, [theme]);

  return [theme, setTheme];
};
