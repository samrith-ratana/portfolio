"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

interface ThemeProviderProps extends React.ComponentProps<typeof NextThemesProvider> {}

/**
 * A clean wrapper around next-themes ThemeProvider
 * - Enables class-based dark mode
 * - Adds default theme settings
 * - Safe for Server Components wrapping
 */
export function ThemeProviderCustom({
  children,
  defaultTheme = "system",
  attribute = "class",
  enableSystem = true,
  ...props
}: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute={attribute}
      defaultTheme={defaultTheme}
      enableSystem={enableSystem}
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
