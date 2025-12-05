import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/layout/Header";

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
      <div className="h-max  bg-black sticky top-0 z-100">
        <Header />
      </div>
      <div>{children}</div>
    </>
  );
}
