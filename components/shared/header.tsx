"use client";

import Image from "next/image";
import styles from "./header.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CSSProperties } from "react";
import { MenuItemType, Theme, ThemeType } from "@/types/common";
import { useThemeContext } from "@/context/theme";
import { Button } from "antd";

const createStyle = (theme: Theme): { [key: string]: CSSProperties } => {
  return {
    logoText: {
      color: theme.logoTextColor,
    },
  };
};

interface Props {}
export default function HeaderComponent(props: Props) {
  const { theme, themeType, setThemeType } = useThemeContext();
  const themeStyles = createStyle(theme);

  const pathname = usePathname();

  const menus: MenuItemType[] = [
    {
      href: "/docs",
      title: "Docs",
    },
    {
      href: "/blog",
      title: "Blog",
    },
    {
      href: "/pricing",
      title: "Pricing",
    },
    {
      href: "/contact-us",
      title: "Contact Us",
    },
  ];

  const themeSwitch = () => {
    setThemeType(
      themeType === ThemeType.DARK ? ThemeType.LIGHT : ThemeType.DARK
    );
  };

  return (
    <div className={`container ${styles.header}`}>
      <div className={styles.logo}>
        <Link href="/landing">
          <Image
            src={`/logo/logo${
              themeType === ThemeType.LIGHT ? "-dark" : ""
            }.svg`}
            alt="Vercel Logo"
            className={styles.vercelLogo}
            width={44}
            height={42}
            priority
          />
          <span style={themeStyles.logoText}>blockflow</span>
        </Link>
      </div>
      <div className={styles.content}>
        <nav className={styles.navBar}>
          {menus.map((menu, index) => (
            <Link
              key={index}
              href={menu.href}
              className={`${styles.navLink} ${
                pathname === menu.href ? styles.active : ""
              }`}
            >
              {menu.title}
            </Link>
          ))}
        </nav>
        <div className={styles.themeTrigger}>
          <Button type="link">
            <Image
              src={`/images/pngs/${
                themeType !== ThemeType.DARK
                  ? "theme-dark-mode.png"
                  : "theme-light-mode.png"
              }`}
              alt=""
              className={styles.vercelLogo}
              width={30}
              height={30}
              priority
              onClick={() => themeSwitch()}
            />
          </Button>
        </div>
      </div>
    </div>
  );
}
