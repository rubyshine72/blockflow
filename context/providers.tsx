import { ReactNode } from "react";
import { ThemeContextProvider } from "./theme";

const Providers = ({ children }: { children: ReactNode }) => {
  return <ThemeContextProvider>{children}</ThemeContextProvider>;
};

export default Providers;
