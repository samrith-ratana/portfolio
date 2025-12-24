import { hash, compare } from "bcryptjs";
import { sign, verify, JwtPayload } from "jsonwebtoken";
import crypto from "crypto";
import { env } from "@/env";

import { db } from "@/modules/db";
import { Role } from "@/modules/enum/Role";
import { 
  User, 
  Session, 
  UserResponseDTO, 
  AuthUserDTO, 
  AuthResponseDTO, 
  TokenResponseDTO 
} from "@/modules/dtos/auth.dto";

export class AuthService {
  private static instance: AuthService;
  private constructor() {}

  static getInstance() {
    if (!this.instance) this.instance = new AuthService();
    return this.instance;
  }

  static verifyAccess(token: string) {
    return verify(token, env("JWT_ACCESS_SECRET")) as JwtPayload & { id: string; roles: Role[] };
  }

  static verifyRefreshToken(token: string) {
    return verify(token, env("JWT_REFRESH_SECRET")) as JwtPayload & { id: string };
  }

  // --- Private Helpers ---
  
  private async findByEmail(email: string): Promise<User | null> {
    const users = await db.users.findMany();
    return users.find(u => u.email === email) || null;
  }

  private async findById(id: string): Promise<User | null> {
    return await db.users.findUnique({ where: { id } });
  }

  private mapToUserDTO(user: User): UserResponseDTO {
    return { id: user.id, email: user.email, role: user.role };
  }

  private generateTokens(userId: string, roles: Role[]): TokenResponseDTO {
    return {
      accessToken: sign({ id: userId, roles }, env("JWT_ACCESS_SECRET"), { expiresIn: "15m" }),
      refreshToken: sign({ id: userId }, env("JWT_REFRESH_SECRET"), { expiresIn: "7d" }),
    };
  }

  private async createSession(userId: string, refreshToken: string) {
    const session: Session = {
      id: crypto.randomUUID(), // Primary key for the Database class
      sessionId: crypto.randomUUID(),
      userId,
      refreshToken,
      createdAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + 7 * 86400000).toISOString(),
    };
    // Match the create({ data: ... }) signature
    await db.sessions.create({ data: session });
  }

  // --- Public Methods ---

  async signup(email: string, password: string): Promise<AuthResponseDTO> {
    if (await this.findByEmail(email)) throw new Error("User already exists");
    
    const passwordHash = await hash(password, 12);
    const user: User = { 
      id: crypto.randomUUID(), 
      email, 
      passwordHash, 
      role: Role.USER 
    };
    
    // Match the create({ data: ... }) signature
    await db.users.create({ data: user });
    const tokens = this.generateTokens(user.id, [user.role]);
    
    await this.createSession(user.id, tokens.refreshToken);
    return { user: this.mapToUserDTO(user), tokens };
  }

  async login(email: string, password: string): Promise<AuthResponseDTO> {
    const user = await this.findByEmail(email);
    if (!user || !(await compare(password, user.passwordHash))) {
      throw new Error("Invalid credentials");
    }

    const tokens = this.generateTokens(user.id, [user.role]);
    await this.createSession(user.id, tokens.refreshToken);

    return { user: this.mapToUserDTO(user), tokens };
  }

  async refresh(refreshToken: string): Promise<TokenResponseDTO> {
    const payload = AuthService.verifyRefreshToken(refreshToken);
    
    const sessions = await db.sessions.findMany();
    const session = sessions.find(s => s.refreshToken === refreshToken);
    if (!session) throw new Error("Invalid session");

    const user = await this.findById(payload.id);
    if (!user) throw new Error("User not found");

    return this.generateTokens(user.id, [user.role]);
  }

  async logout(refreshToken: string) {
    if (!refreshToken) return;
    
    const sessions = await db.sessions.findMany();
    const session = sessions.find(s => s.refreshToken === refreshToken);
    
    if (session) {
      // Match the delete({ where: { id: ... } }) signature
      await db.sessions.delete({ where: { id: session.id } });
    }
  }

  async getMe(accessToken: string): Promise<AuthUserDTO> {
    const payload = AuthService.verifyAccess(accessToken);
    const user = await this.findById(payload.id);
    if (!user) throw new Error("User not found");

    return { 
      id: user.id, 
      email: user.email, 
      roles: [user.role] 
    };
  }
}

export const authService = AuthService.getInstance();