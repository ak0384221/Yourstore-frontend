import type { Metadata } from "next";
import "../globals.css";
import Header from "@/micro-components/Header";

export const metadata: Metadata = {
  title: "Yourstore | Buy something..",
  description: "Buy what you like ",
};

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="h-[15svh] 0 relative">
        <Header />
      </div>
      <div>{children}</div>
    </>
  );
}
