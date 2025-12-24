import { Role } from "@/modules/enum/Role";

/**
 * Database Entities
 * These must include 'id: string' to work with your Database class
 */
export interface User {
  id: string;
  email: string;
  passwordHash: string;
  role: Role;
}

export interface Session {
  id: string; // Required for the Database class constraint
  sessionId: string;
  userId: string;
  refreshToken: string;
  createdAt: string;
  expiresAt: string;
}

/**
 * Data Transfer Objects (DTOs)
 * Structures used for API communication
 */
export interface UserResponseDTO {
  id: string;
  email: string;
  role: Role;
}

export interface AuthUserDTO {
  id: string;
  email: string;
  roles: Role[];
}

export interface TokenResponseDTO {
  accessToken: string;
  refreshToken: string;
}

export interface AuthResponseDTO {
  user: UserResponseDTO;
  tokens: TokenResponseDTO;
}