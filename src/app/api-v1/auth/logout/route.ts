import { NextResponse } from "next/server";
import { authService } from "@/modules/services/auth.service";
import { CookieService } from "@/modules/services/cookie.service";

export async function POST() {
  const { refreshToken } = await CookieService.getTokens();

  if (refreshToken) {
    await authService.logout(refreshToken);
  }

  const response = NextResponse.json({ message: "Logged out" });
  CookieService.clearAuthCookies(response);

  return response;
}