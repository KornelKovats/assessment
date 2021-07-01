import logger from '../logger';
import { StatusCodes } from 'http-status-codes';

// eslint-disable-next-line no-unused-vars
export default (err, req, res, next) => {
  logger.error(
    `${err.status || StatusCodes.INTERNAL_SERVER_ERROR} - ${err.message} - ${req.originalUrl} - ${
      req.method
    } - ${req.ip}`
  );
  res.status(err.status || StatusCodes.INTERNAL_SERVER_ERROR);
  res.json({
    message:
      req.app.get('env') === 'development'
        ? err.message
        : 'Unknown error happened',
  });
};