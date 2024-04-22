import "./globals.css";

import AuthContext from "@/utils/context";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextJs Boilerplate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthContext>
      <html lang="kr">
        <body className={inter.className}>{children}</body>
      </html>
    </AuthContext>
  );
}
