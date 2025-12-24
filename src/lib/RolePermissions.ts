// lib/domain/auth/RolePermissions.ts
import { Role } from "@/modules/enum/Role";
import { Permission } from "@/modules/enum/Permission";

export const RolePermissions: Record<Role, Permission[]> = {
  [Role.ADMIN]: Object.values(Permission), // all permissions
  [Role.USER]: [Permission.VIEW_USERS],    // only VIEW_USERS
};
