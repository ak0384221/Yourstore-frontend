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
      <head>
        <link rel="shortcut icon" href="regalo.png" type="image/x-icon" />
      </head>
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
