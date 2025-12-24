import { NextResponse } from "next/server";
import { authService } from "@/modules/services/auth.service";
import { CookieService } from "@/modules/services/cookie.service";

export async function POST() {
  try {
    const { refreshToken } = await CookieService.getTokens();
    if (!refreshToken) throw new Error("No refresh token");

    const newTokens = await authService.refresh(refreshToken);
    
    const response = NextResponse.json({ success: true });
    CookieService.setAuthCookies(response, newTokens);

    return response;
  } catch (error: any) {
    const response = NextResponse.json({ error: "Session expired" }, { status: 401 });
    CookieService.clearAuthCookies(response);
    return response;
  }
}