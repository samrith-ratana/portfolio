export interface Experience {
  id: string;      // Required in DB
  userId: string;  // Required in DB
  title: string;
  company: string;
  startDate: string;
  endDate?: string;
  description: string;
}

export interface CreateExperienceDTO {
  // No 'id' or 'userId' here (these are created by the backend)
  title: string;
  company: string;
  startDate: string;
  endDate?: string;
  description: string;
}