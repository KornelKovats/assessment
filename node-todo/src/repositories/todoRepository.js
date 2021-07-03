import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { readFile, writeFile } from 'fs/promises';
import { StatusCodes } from 'http-status-codes';

//Important!: should not use ReadFileSync. It blocks the thread.
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const todoPath = path.join(__dirname, '../db/data.json');

export const todoRepository = {
  async readAll() {
    try {
      return JSON.parse(await readFile(todoPath, 'utf-8'));
    } catch (error) {
      throw {
        status: StatusCodes.INTERNAL_SERVER_ERROR,
        message: error.message,
      };
    }
  },
  async findOne(id) {
    try {
      const todos = JSON.parse(await readFile(todoPath, 'utf-8'));
      const index = todos.findIndex(element => element.id === id);
      return todos[index];
    } catch (error) {
      throw {
        status: StatusCodes.INTERNAL_SERVER_ERROR,
        message: error.message,
      };
    }
  },
  async deleteOne(id) {
    try {
      const todos = JSON.parse(await readFile(todoPath, 'utf-8'));
      const index = todos.findIndex(element => element.id === id);
      const deletedTodos = todos.filter(element => element.id !== id);
      const stringifiedJSON = JSON.stringify(deletedTodos, null, 2);
      await writeFile(todoPath, stringifiedJSON);
      return index === -1 ? 'failed' : 'deleted';
    } catch (error) {
      throw {
        status: StatusCodes.INTERNAL_SERVER_ERROR,
        message: error.message,
      };
    }
  },
  async insertNew(newTodo) {
    try {
      const todos = JSON.parse(await readFile(todoPath, 'utf-8'));
      todos.push(newTodo);
      await writeFile(todoPath, JSON.stringify(todos, null, 2));
      return newTodo;
    } catch (error) {
      throw {
        status: StatusCodes.INTERNAL_SERVER_ERROR,
        message: error.message,
      };
    }
  }
};
