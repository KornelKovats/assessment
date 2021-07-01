import path, { dirname }from 'path';
import { fileURLToPath } from 'url';
import { readFile } from 'fs/promises';

//Important!: should not use ReadFileSync. It blocks the thread.
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const todoPath = path.join(__dirname, '../db/data.json');


export const todoRepository = {
  async readAll() {
    try {
      return JSON.parse(await readFile(todoPath, 'utf-8'));
    } catch (error) {
      console.log(error);
    }
  },
};
