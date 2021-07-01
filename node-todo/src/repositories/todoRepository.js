import path, { dirname }from 'path';
import { fileURLToPath } from 'url';
import { readFile } from 'fs/promises';
import { StatusCodes } from 'http-status-codes';

//Important!: should not use ReadFileSync. It blocks the thread.
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const todoPath = path.join(__dirname, '../sdb/data.json');


export const todoRepository = {
  async readAll() {
    try {
      return JSON.parse(await readFile(todoPath, 'utf-8'));
    } catch (err) {
      throw { status: StatusCodes.INTERNAL_SERVER_ERROR, message: err.message}
    }
  },
};
