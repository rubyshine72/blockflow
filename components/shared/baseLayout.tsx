"use client";

import StyledComponentsRegistry from "@/lib/AntdRegistry";
import ConfigTheme from "@/components/shared/configTheme";
import { Lato } from "next/font/google";
import { useThemeContext } from "@/context/theme";
import { createStyle } from "./baseLayout.styles";

const fontLato = Lato({
  weight: ["100", "300", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useThemeContext();
  const themeStyles = createStyle(theme);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo-dark.png" sizes="any" />
      </head>
      <body className={fontLato.className} style={themeStyles.body}>
        <StyledComponentsRegistry>
          <ConfigTheme>{children}</ConfigTheme>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
