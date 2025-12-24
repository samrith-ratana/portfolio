import { NextResponse } from "next/server";
import { authService } from "@/modules/services/auth.service";
import { CookieService } from "@/modules/services/cookie.service";

export async function GET() {
  try {
    const { accessToken } = await CookieService.getTokens();

    if (!accessToken) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await authService.getMe(accessToken);
    return NextResponse.json(user);
  } catch (error: any) {
    return NextResponse.json({ error: "Token expired or invalid" }, { status: 401 });
  }
}