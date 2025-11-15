import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yourstore | buy comething you love",
  description: "yourstore is a n ecommerce shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-rootBg">
        <div>{children}</div>
      </body>
    </html>
  );
}
