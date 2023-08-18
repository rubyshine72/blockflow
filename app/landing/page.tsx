"use client";

import SvgLandingBg from "@/components/svg/svgLandingBg";
import { Button } from "antd";
import AnimatedBgCircle from "@/components/landing/animatedBgCircle";
import styles from "./page.module.scss";
import { createStyle } from "./page.styles";
import { useThemeContext } from "@/context/theme";

export default function Landing() {
  const { theme } = useThemeContext();
  const themeStyles = createStyle(theme);

  return (
    <div className={`container`}>
      <div className={styles.main}>
        <div className={styles.mainInner}>
          <div className={styles.bgWrapper}>
            <SvgLandingBg />
          </div>
          <div className={styles.content}>
            <div>
              <h1>
                Elevate your
                <br /> dapp development with blockflow
              </h1>
              <p>
                Efficient API Creation for <br /> Your Blockchain Data Needs.
              </p>
            </div>

            <div className={styles.requestDemo}>
              <Button
                type="primary"
                size="large"
                className={styles.requestBtn}
                style={themeStyles.requestBtn}
              >
                Request Demo
              </Button>
            </div>
          </div>
          <AnimatedBgCircle />
        </div>
      </div>
    </div>
  );
}
