import { todoService } from '../services';
import { StatusCodes } from 'http-status-codes';

export const todoController = {
    async getAll(req, res) {
      let data = await todoService.getTodos();
      res.status(StatusCodes.OK).json(data);
    },
  };