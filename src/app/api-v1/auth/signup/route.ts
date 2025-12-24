import { NextResponse } from "next/server";
import { authService } from "@/modules/services/auth.service";
import { CookieService } from "@/modules/services/cookie.service";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    const result = await authService.signup(email, password);

    const response = NextResponse.json(result.user, { status: 201 });
    CookieService.setAuthCookies(response, result.tokens);

    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}