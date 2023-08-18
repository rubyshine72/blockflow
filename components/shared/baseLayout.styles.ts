import { Theme } from "@/types/common";
import { CSSProperties } from "react";

export const createStyle = (theme: Theme): { [key: string]: CSSProperties } => {
  return {
    body: {
      color: theme.color,
      background: theme.background,
    },
  };
};
