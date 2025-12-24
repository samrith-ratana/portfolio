// lib/AuthContext.ts
import { Role } from "@/modules/enum/Role";
import { Permission } from "@/modules/enum/Permission";

export interface AuthContext {
  userId: string;
  roles: Role[];
  permissions?: Permission[];
}
