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
  async getOneTodo(req, res, next){
    const { id } = req.params;
    try {
      let data = await todoService.getOneTodo(id);
      res.status(StatusCodes.OK).json(data);
    } catch (error) {
      next(error);
    }
  },
  async deleteOne(req, res, next){
    const { id } = req.params;
    try {
      let data = await todoService.deleteOne(id);
      res.status(StatusCodes.OK).json(data);
    } catch (error) {
      next(error);
    }
  },
  async insert(req, res, next){
    const { body } = req;
    try {
      let data = await todoService.insertNew(body);
      res.status(StatusCodes.OK).json(data);
    } catch (error) {
      next(error);
    }
  }
};
