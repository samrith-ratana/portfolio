import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProviderCustom } from "@/components/themes/ThemeContext";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Samrith Ratana | Developer Portfolio",
  description: "A modern portfolio website built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProviderCustom>{children}</ThemeProviderCustom>
      </body>
    </html>
  );
}