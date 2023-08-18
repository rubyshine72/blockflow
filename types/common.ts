import { ThemeConfig } from "antd";

export enum ThemeType {
  LIGHT = "light",
  DARK = "dark",
}

export interface MenuItemType {
  href: string;
  title: string;
}

export interface Theme {
  background: string;
  color: string;
  logoTextColor: string;
  buttonBoxShadow: string;
  buttonPrimaryTextColor: string;
  svgBgColor: string;
}
