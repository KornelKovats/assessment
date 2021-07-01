import request from 'supertest';
import { StatusCodes } from 'http-status-codes';

import app from '../app';

test('should respond with 200 - OK', done => {
  request(app)
    .get('/hello')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(StatusCodes.OK)
    .end((err, data) => {
      if (err) return done(err);
      expect(data.body.message).toEqual('Hello World!');
      return done();
    });
});