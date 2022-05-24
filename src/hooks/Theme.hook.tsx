import { useEffect, useState } from "react";

export const useThemeSwitcher = (
  themeName: string
): [boolean, React.Dispatch<React.SetStateAction<boolean>>] => {
  const [theme, setTheme] = useState<boolean>(false);

  useEffect(() => {
    if (theme) {
      document.body.className = themeName;
    } else if (!theme) {
      document.body.className = "";
    }
  }, [theme]);

  return [theme, setTheme];
};
