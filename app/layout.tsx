import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/index";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
