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
      await writeFile(todoPath, JSON.stringify(deletedTodos, null, 2), 'utf-8');
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
      const newTodoToInsert = newTodo;
      todos.push(newTodoToInsert);
      await writeFile(todoPath, JSON.stringify(todos, null, 2), 'utf-8');
      return newTodoToInsert;
    } catch (error) {
      throw {
        status: StatusCodes.INTERNAL_SERVER_ERROR,
        message: error.message,
      };
    }
  },
};
