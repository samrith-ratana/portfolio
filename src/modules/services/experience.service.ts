import { db } from "@/modules/db";
import { Experience, CreateExperienceDTO } from "@/modules/dtos/experience.dto";
import crypto from "crypto";

export class ExperienceService {
  // Return type is Experience[], and db.experiences.findMany() now returns Experience[]
  async getByUserId(userId: string): Promise<Experience[]> {
    const all = await db.experiences.findMany();
    return all.filter((exp) => exp.userId === userId);
  }

  // ... rest of the file stays the same
  async getById(id: string): Promise<Experience | null> {
    return await db.experiences.findUnique({ where: { id } });
  }

  async create(userId: string, data: CreateExperienceDTO): Promise<Experience> {
    const experience: Experience = {
      id: crypto.randomUUID(),
      userId,
      ...data,
    };
    // This works because 'experience' has 'id', matching Collection<Experience>
    await db.experiences.create({ data: experience });
    return experience;
  }

  async update(id: string, userId: string, data: Partial<CreateExperienceDTO>) {
    const existing = await this.getById(id);
    if (!existing || existing.userId !== userId) throw new Error("Unauthorized");

    await db.experiences.update({
      where: { id },
      data: { ...existing, ...data },
    });
  }

  async delete(id: string, userId: string) {
    const existing = await this.getById(id);
    if (!existing || existing.userId !== userId) throw new Error("Unauthorized");

    await db.experiences.delete({ where: { id } });
  }
}

export const experienceService = new ExperienceService();