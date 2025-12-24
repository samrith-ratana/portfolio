import fs from 'fs/promises';
import path from 'path';

export class Database<T extends { id: string }> {
  
  private filePath: string;

  constructor(relativeFilePath: string) {
    this.filePath = path.join(process.cwd(), relativeFilePath);
  }

  /**
   * Internal helper to ensure the directory and file exist.
   * Prevents ENOENT (File not found) errors.
   */
  private async ensureFileExists(): Promise<void> {
    try {
      await fs.access(this.filePath);
    } catch {
      const dir = path.dirname(this.filePath);
      // Create folders if they don't exist
      await fs.mkdir(dir, { recursive: true });
      // Initialize file with empty array
      await this.writeData([]);
    }
  }

  private async readData(): Promise<T[]> {
    // FIX: Must call this to handle missing files/folders
    await this.ensureFileExists();
    
    try {
      const data = await fs.readFile(this.filePath, 'utf-8');
      
      // Handle empty files to prevent JSON.parse error
      if (!data || data.trim() === "") return [];
      
      return JSON.parse(data);
    } catch (error) {
      console.error(`Error reading ${this.filePath}:`, error);
      return [];
    }
  }

  private async writeData(data: T[]): Promise<void> {
    // Ensure the path is ready before writing
    const dir = path.dirname(this.filePath);
    await fs.mkdir(dir, { recursive: true });
    
    await fs.writeFile(this.filePath, JSON.stringify(data, null, 2), 'utf-8');
  }

  // --- Public Methods ---

  async findMany(): Promise<T[]> {
    return await this.readData();
  }

  async findUnique({ where }: { where: { id: string } }): Promise<T | null> {
    const data = await this.readData();
    return data.find((item) => item.id === where.id) || null;
  }

  async create({ data }: { data: Omit<T, 'id'> & { id?: string } }): Promise<T> {
    const allData = await this.readData();
    const newItem = { 
      ...data, 
      id: data.id || crypto.randomUUID() 
    } as T;
    
    allData.push(newItem);
    await this.writeData(allData);
    return newItem;
  }

  async update({ where, data }: { where: { id: string }; data: Partial<T> }): Promise<T> {
    const allData = await this.readData();
    const index = allData.findIndex((item) => item.id === where.id);
    if (index === -1) throw new Error(`Record with id ${where.id} not found`);

    allData[index] = { ...allData[index], ...data };
    await this.writeData(allData);
    return allData[index];
  }

  async delete({ where }: { where: { id: string } }) {
    const allData = await this.readData();
    const filtered = allData.filter((item) => item.id !== where.id);
    await this.writeData(filtered);
    return { success: true };
  }
}