// lib/AuthorizationService.ts
import { Permission } from "@/modules/enum/Permission";
import { RolePermissions } from "@/lib/RolePermissions";
import { AuthContext } from "@/lib/AuthContext";

export class AuthorizationError extends Error {
  constructor(permission: Permission) {
    super(`Forbidden: missing permission ${permission}`);
    this.name = "AuthorizationError";
  }
}

export class AuthorizationService {

  static can(ctx: AuthContext, permission: Permission): boolean {
    return ctx.roles.some((role) =>
      RolePermissions[role]?.includes(permission)
    );
  }

  static require(ctx: AuthContext, permission: Permission) {
    const hasExplicit = ctx.permissions?.includes(permission) ?? false;
    const hasRolePermission = AuthorizationService.can(ctx, permission);

    if (!hasExplicit && !hasRolePermission) {
      console.error(
        `Authorization failed: user roles=${ctx.roles}, user permissions=${ctx.permissions}, missing=${permission}`
      );
      throw new AuthorizationError(permission);
    }
  }

}
