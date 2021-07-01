import { todoRepository } from '../repositories';
import { StatusCodes } from 'http-status-codes';

export const todoService = {
  async getTodos() {
    return await todoRepository.readAll();
  },
  async getOneTodo(id){
    const todo = await todoRepository.findOne(id);
    if(todo !== undefined){
      return todo;
    }else {
      throw {
        status: StatusCodes.NOT_FOUND,
        message: "No data with that id"
      }
    }
  },
  async deleteOne(id){
    const deletion = await todoRepository.deleteOne(id);
    if (deletion === 'deleted') {
      return {}
    }else {
      throw{
        status: StatusCodes.NOT_FOUND,
        message: "No data with that id"
      }
    }
  }
};
