import type { Metadata, Viewport } from "next";
import { ThemeProviderCustom } from "@/components/themes/ThemeContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Samrith Ratana — Portfolio",
  description: "Samrith Ratana — Full Stack Developer and IT Solutions Specialist.",
};

export const viewport: Viewport = {
  themeColor: "#b8d7f5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProviderCustom>{children}</ThemeProviderCustom>
      </body>
    </html>
  );
}
