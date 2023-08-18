import "./globals.scss";
import type { Metadata } from "next";
import Providers from "@/context/providers";

import BaseLayout from "@/components/shared/baseLayout";

export const metadata: Metadata = {
  title: "Blockflow",
  description: "Blockflow next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <BaseLayout>{children}</BaseLayout>
    </Providers>
  );
}
