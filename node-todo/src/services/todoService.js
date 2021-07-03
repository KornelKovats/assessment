import { todoRepository } from '../repositories';
import { StatusCodes } from 'http-status-codes';
import { uuid } from 'uuidv4';
import { isTodoValid, isUpdateTodoValid } from '../models/todoValidation';

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
    const id = uuid();
    if (isTodoValid(body)) {
      if (!Object.prototype.hasOwnProperty.call(body, 'priority')) {
        body.priority = 3;
      }
      if (!Object.prototype.hasOwnProperty.call(body, 'done')) {
        body.done = false;
      }
      const newTodo = await todoRepository.insertNew({
        id,
        ...body,
      });
      if (body.done === true) {
        setTimeout(async () => {
          await todoRepository.deleteOne(id);
        }, 5 * 60 * 1000);
      }
      return newTodo;
    } else {
      throw {
        status: StatusCodes.UNPROCESSABLE_ENTITY,
        message: 'Wrong entity',
      };
    }
  },
  async updateOne(id, body) {
    const todo = await todoRepository.findOne(id);
    if (todo !== undefined) {
      if (isUpdateTodoValid(body)) {
        const updatedTodo = await todoRepository.updateOne({
          id,
          ...body,
        });
        if (body.done === true) {
          setTimeout(async () => {
            await todoRepository.deleteOne(id);
          }, 5 * 60 * 1000);
        }
        return updatedTodo;
      } else {
        throw {
          status: StatusCodes.UNPROCESSABLE_ENTITY,
          message: 'Wrong entity',
        };
      }
    } else {
      throw {
        status: StatusCodes.NOT_FOUND,
        message: 'No data with that id',
      };
    }
  }
};
