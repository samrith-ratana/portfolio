// lib/getAuthContext.ts
import { AuthContext } from "@/lib/AuthContext";
import { AuthService } from "@/modules/services/auth.service";
import { cookies } from "next/headers";
import { Role } from "@/modules/enum/Role"; // ✅ Add this import

export async function getAuthContext(): Promise<AuthContext> {
  const token = (await cookies()).get("accessToken")?.value;
  if (!token) throw new Error("Unauthorized: no token found");

  const payload = AuthService.verifyAccess(token);
  const roles = payload.roles?.length ? payload.roles : [Role.USER];

  const ctx: AuthContext = {
    userId: payload.id,
    roles,
    permissions: payload.permissions || [],
  };

  return ctx;

}
