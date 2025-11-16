import type { Metadata } from "next";
import "../globals.css";
import Header from "@/micro-components/newNav";

export const metadata: Metadata = {
  title: "Yourstore | Buy something..",
  description: "Send a gift",
};

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-rootBg">
        <Header />
        <div className="mt-[theme(--marginTop)] md:mt-[theme(--marginTopLG)]">
          {children}
        </div>
      </body>
    </html>
  );
}
