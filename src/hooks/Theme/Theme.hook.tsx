import { useLayoutEffect } from "react";
import { useMedia, useLocalStorage } from "react-use";

import Theme from "../../style/main.scss";

import {
  DEFAULT_THEME,
  THEME_KEY,
  PREFERS_COLOR_SCHEME_LIGHT,
} from "./Theme.config";

const { light } = Theme;

export const useTheme = () => {
  const [value, setValue] = useLocalStorage(THEME_KEY, DEFAULT_THEME);
  const prefersLightMode = useMedia(PREFERS_COLOR_SCHEME_LIGHT);

  useLayoutEffect(() => {
    if (value) {
      document.documentElement.className = value;
    }

    if (prefersLightMode) {
      setValue(light);
      document.documentElement.className = light;
    }
  }, [prefersLightMode, setValue, value]);

  const setTheme = (themeName: string): void => {
    if (themeName !== value && themeName) {
      setValue(themeName);
      document.documentElement.className = themeName;
    }
  };

  const setDefaultTheme = (): void => {
    setValue(DEFAULT_THEME);
    document.documentElement.className = "";
  };

  return { currentTheme: value, setDefaultTheme, setTheme };
};
