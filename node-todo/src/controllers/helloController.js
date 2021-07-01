import { helloService } from '../services';
import { StatusCodes } from 'http-status-codes';

export const helloController = {
  async get(req, res) {
    let data = await helloService.getHelloWorld();
    res.status(StatusCodes.OK).json(data);
  },
};
