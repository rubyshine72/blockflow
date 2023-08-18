"use client";
import { ReactNode, useEffect } from "react";
import { ConfigProvider } from "antd";
import { antLightTheme, antDarkTheme } from "@/theme/antThemes";
import { useThemeContext } from "@/context/theme";
import { ThemeType } from "@/types/common";

import fontAirbnbCerealWBd from "@/fonts/AirbnbCerealWBd";
import fontNeueMontreal from "@/fonts/NeueMontreal/NeueMontreal";

const ConfigTheme = ({ children }: { children: ReactNode }) => {
  const { themeType, setThemeType } = useThemeContext();

  useEffect(() => {
    document.body.dataset.theme = themeType;
  }, [themeType]);

  return (
    <ConfigProvider
      theme={themeType === ThemeType.LIGHT ? antLightTheme : antDarkTheme}
    >
      <style jsx global>{`
        :root {
          --font-airbnb_cereal: ${fontAirbnbCerealWBd.style.fontFamily};
          --font-neue-montreal: ${fontNeueMontreal.style.fontFamily};
        }
      `}</style>
      {children}
    </ConfigProvider>
  );
};

export default ConfigTheme;
