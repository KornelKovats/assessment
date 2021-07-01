import { todoRepository } from '../repositories';
import { StatusCodes } from 'http-status-codes';
import { uuid } from 'uuidv4';
import { isTodoValid } from '../models/todoValidation';

export const todoService = {
  async getTodos() {
    return await todoRepository.readAll();
  },
  async getOneTodo(id) {
    const todo = await todoRepository.findOne(id);
    if (todo !== undefined) {
      return todo;
    } else {
      throw {
        status: StatusCodes.NOT_FOUND,
        message: 'No data with that id',
      };
    }
  },
  async deleteOne(id) {
    const deletion = await todoRepository.deleteOne(id);
    if (deletion === 'deleted') {
      return {};
    } else {
      throw {
        status: StatusCodes.NOT_FOUND,
        message: 'No data with that id',
      };
    }
  },
  async insertNew(body) {
    const newId = uuid();
    console.log(newId);
    if (isTodoValid(body)) {
      const newTodo = await todoRepository.insertNew({
        id: newId,
        ...body,
      });
      return newTodo;
    } else {
      throw {
        status: StatusCodes.UNPROCESSABLE_ENTITY,
        message: 'Wrong entity',
      };
    }
  },
};
