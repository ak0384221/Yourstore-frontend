import type { Metadata } from "next";
import "../globals.css";
import AdminNavbar from "@/micro-components/adminNavbar";

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
        <AdminNavbar />
        <div>{children}</div>
      </body>
    </html>
  );
}
