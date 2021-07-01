import { todoRepository } from '../repositories';

export const todoService = {
  async getTodos() {
    return todoRepository.readAll();
  },
  async getOneTodo(id){
    return todoRepository.findOne(id);
  }
};
