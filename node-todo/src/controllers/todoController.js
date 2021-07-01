import { todoService } from '../services';
import { StatusCodes } from 'http-status-codes';

export const todoController = {
  async getAll(req, res, next) {
    try {
      let data = await todoService.getTodos();
      res.status(StatusCodes.OK).json(data);
    } catch (error) {
      next(error);
    }
  },
};
