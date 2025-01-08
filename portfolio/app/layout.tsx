import dynamic from "next/dynamic";
const AppLayout = dynamic(() => import("../components/AppLayout"));
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AppLayout>{children}</AppLayout>;
}
