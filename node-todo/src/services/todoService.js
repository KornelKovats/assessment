import { todoRepository } from '../repositories';

export const todoService = {
  async getTodos() {
    return todoRepository.readAll();
  },
};
