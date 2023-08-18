import { Theme } from "@/types/common";
import { CSSProperties } from "react";

export const createStyle = (theme: Theme): { [key: string]: CSSProperties } => {
  return {
    requestBtn: {
      boxShadow: theme.buttonBoxShadow,
      color: theme.buttonPrimaryTextColor,
    },
  };
};
