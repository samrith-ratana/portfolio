import { Database } from '@/modules/query';
// 1. Change this import to fetch the full 'Experience' interface
import { Experience } from '@/modules/dtos/experience.dto';
import { 
  User, 
  Session
} from "@/modules/dtos/auth.dto";

export const db = {
  // 2. Change the Generic Type from <CreateExperienceDTO> to <Experience>
  // This tells TypeScript that this JSON file will store objects containing IDs
  experiences: new Database<Experience>('src/modules/data/experiences.json'),
  
  users: new Database<User>('src/modules/data/users.json'),
  sessions: new Database<Session>('src/modules/data/sessions.json'),
};