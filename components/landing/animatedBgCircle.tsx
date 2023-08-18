"use client";

import { useThemeContext } from "@/context/theme";
import React from "react";
import styles from "./animatedBgCircle.module.scss";
import { ThemeType } from "@/types/common";

const AnimatedBgCircle = () => {
  const { themeType } = useThemeContext();

  return (
    <div
      className={
        themeType !== ThemeType.DARK ? styles.wrapper : styles.darkWrapper
      }
    >
      <div className={styles.wrapperInner}>
        <div className={styles.outerCircle}>
          <div className={styles.innerCircle}></div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedBgCircle;
