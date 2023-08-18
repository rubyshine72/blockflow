"use client";

import { darkTheme, lightTheme } from "@/theme/myThemes";
import { Theme, ThemeType } from "@/types/common";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

/**
 * Global context data
 */
interface ContextProps {
  theme: Theme;
  themeType: ThemeType;
  setThemeType: (theme: ThemeType) => void;
}

const ThemeContext = createContext<ContextProps>({
  theme: lightTheme,
  themeType: ThemeType.DARK,
  setThemeType: () => {},
});

/**
 * Context provider
 *
 * @param param0
 * @returns
 */
export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [themeType, setThemeTypeVal] = useState(ThemeType.LIGHT);
  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {
    setTheme(themeType === ThemeType.LIGHT ? lightTheme : darkTheme);
  }, [themeType]);

  useEffect(() => {
    const res = localStorage.getItem("theme");
    if (res === ThemeType.DARK && themeType !== ThemeType.DARK) {
      setThemeTypeVal(ThemeType.DARK);
    } else {
      setThemeTypeVal(ThemeType.LIGHT);
    }
  }, [localStorage]);

  const setThemeType = (theme: ThemeType) => {
    setThemeTypeVal(theme);
    localStorage.setItem("theme", theme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        themeType,
        setThemeType,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
