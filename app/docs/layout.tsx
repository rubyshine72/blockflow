import HeaderComponent from "@/components/shared/header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderComponent />
      {children}
    </>
  );
}
