import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Regalo | Send A Gift",
  description: "Send a gift",
};

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className="bg-rootBg text-white">
        <div className=" mt-[15dvh]">{children}</div>
      </body>
    </html>
  );
}
