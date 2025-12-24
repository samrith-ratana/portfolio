// @/modules/services/cookie.service.ts
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { env } from "@/env";

export class CookieService {
  private static readonly ACCESS_TOKEN_NAME = "accessToken";
  private static readonly REFRESH_TOKEN_NAME = "refreshToken";

  private static readonly COOKIE_OPTIONS = {
    httpOnly: true,
    secure: env("NODE_ENV") === "production",
    sameSite: "strict" as const,
    path: "/",
  };

  /**
   * GETTER: Retrieves tokens from the current request headers
   */
  static async getTokens() {
    const cookieStore = await cookies();
    return {
      accessToken: cookieStore.get(this.ACCESS_TOKEN_NAME)?.value,
      refreshToken: cookieStore.get(this.REFRESH_TOKEN_NAME)?.value,
    };
  }

  /**
   * SETTER: Attaches auth tokens to the response object
   */
  static setAuthCookies(
    response: NextResponse, 
    tokens: { accessToken: string; refreshToken: string }
  ) {
    response.cookies.set(this.ACCESS_TOKEN_NAME, tokens.accessToken, {
      ...this.COOKIE_OPTIONS,
      maxAge: 15 * 60,
    });

    response.cookies.set(this.REFRESH_TOKEN_NAME, tokens.refreshToken, {
      ...this.COOKIE_OPTIONS,
      maxAge: 7 * 24 * 60 * 60,
    });
  }

  /**
   * DELETER: Clears auth tokens (for logout)
   * Passing the response ensures the 'Set-Cookie' header is properly sent.
   */
  static clearAuthCookies(response: NextResponse) {
    const clearOptions = { ...this.COOKIE_OPTIONS, maxAge: 0 };
    
    response.cookies.set(this.ACCESS_TOKEN_NAME, "", clearOptions);
    response.cookies.set(this.REFRESH_TOKEN_NAME, "", clearOptions);
  }
}