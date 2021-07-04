import { todoRepository } from '../../repositories';
import { todoService } from '../todoService';
import { jest } from '@jest/globals';

jest.useFakeTimers();

const database = [
  {
    id: '111c50d3-5320-4d33-a7d1-f093c1b43514',
    text: 'testone',
    priority: 1,
    done: false,
  },
  {
    id: 'a53f2b5e-6a8f-439b-a247-f52501b7222e',
    text: 'testtwo',
    priority: 5,
    done: true,
  },
];

test('get All Todos', async () => {
  let spyReadAllTodo = jest.spyOn(todoRepository, 'readAll');
  spyReadAllTodo.mockReturnValue(database);
  let result = await todoService.getTodos();
  expect(result).toEqual(database);
});

test('get one Todo', async () => {
  let spyGetOneTodo = jest.spyOn(todoRepository, 'findOne');
  spyGetOneTodo.mockReturnValue(database[0]);
  let result = await todoService.getOneTodo(
    '111c50d3-5320-4d33-a7d1-f093c1b43514'
  );
  expect(result).toEqual(database[0]);
});
test('get one Todo with wrong id', async () => {
  let spyGetOneTodo = jest.spyOn(todoRepository, 'findOne');
  spyGetOneTodo.mockReturnValue(undefined);
  try {
    await todoService.getOneTodo('1234');
  } catch (error) {
    expect(error.message).toBe('No data with that id');
  }
});
test('delete a Todo with existing id', async () => {
  let spyGetOneTodo = jest.spyOn(todoRepository, 'deleteOne');
  spyGetOneTodo.mockReturnValue('deleted');
  let result = await todoService.deleteOne(
    '111c50d3-5320-4d33-a7d1-f093c1b43514'
  );
  expect(result).toStrictEqual({});
});

test('delete a Todo with non-existing id', async () => {
  let spyGetOneTodo = jest.spyOn(todoRepository, 'deleteOne');
  spyGetOneTodo.mockReturnValue('failed');
  try {
    await todoService.deleteOne('1234');
  } catch (error) {
    expect(error.message).toBe('No data with that id');
  }
});
test('insert new Todo with proper entities', async () => {
  let insertValue = {
    text: 'testtwo',
    priority: 5,
    done: true,
  };
  let expectedNewTodo = {
    id: 'a53f2b5e-6a8f-439b-a247-f52501b7222e',
    text: 'testtwo',
    priority: 5,
    done: true,
  };
  let spyInsertNewTodod = jest.spyOn(todoRepository, 'insertNew');
  spyInsertNewTodod.mockReturnValue(expectedNewTodo);
  let result = await todoService.insertNew(insertValue);
  expect(result).toStrictEqual(database[1]);
});
test('insert new Todo with wrong entity:missing text', async () => {
  let expectedNewTodo = {
    priority: 5,
    done: true,
  };
  try {
    await todoService.insertNew(expectedNewTodo);
  } catch (error) {
    expect(error.message).toBe('Wrong entity');
  }
});
test('insert new Todo with wrong entity:not english letters', async () => {
  let expectedNewTodo = {
    text: 'álmodom szépeket',
    priority: 5,
    done: true,
  };
  try {
    await todoService.insertNew(expectedNewTodo);
  } catch (error) {
    expect(error.message).toBe('Wrong entity');
  }
});
test('insert new Todo with wrong entity:priority is 0', async () => {
  let expectedBodyTodo = {
    text: 'asd',
    priority: 0,
    done: true,
  };
  let expectedNewTodo = {
    id: '111c50d3-5320-4d33-a7d1-f093c1b43514',
    text: 'asd',
    priority: 0,
    done: true,
  };
  let sypInsertNewTodo = jest.spyOn(todoRepository, 'insertNew');
  sypInsertNewTodo.mockReturnValue(expectedNewTodo);
  try {
    await todoService.insertNew(expectedBodyTodo);
  } catch (error) {
    expect(error.message).toBe('Wrong entity');
  }
});
test('update new Todo with wrong id', async () => {
  let spyGetOneTodo = jest.spyOn(todoRepository, 'findOne');
  spyGetOneTodo.mockReturnValue(undefined);
  try {
    await todoService.updateOne('1234');
  } catch (error) {
    expect(error.message).toBe('No data with that id');
  }
});
test('update new Todo with valid body', async () => {
  let updatedTodo = {
    id: database[0].id,
    text: 'Needs to clean house',
    priority: 5,
    done: true,
  };
  let spyGetOneTodo = jest.spyOn(todoRepository, 'findOne');
  spyGetOneTodo.mockReturnValue(database[0]);
  let spyUpdateOneTodo = jest.spyOn(todoRepository, 'updateOne');
  spyUpdateOneTodo.mockReturnValue(updatedTodo);
  let result = await todoService.updateOne(database[0].id, {
    text: 'Needs to clean house',
    priority: 5,
    done: true,
  });
  expect(result).toBe(updatedTodo);
});
test('update new Todo with non-valid body: missing text', async () => {
  let updatedTodo = {
    id: database[0].id,
    text: 'Needs to clean house',
    priority: 0,
    done: true,
  };
  let spyGetOneTodo = jest.spyOn(todoRepository, 'findOne');
  spyGetOneTodo.mockReturnValue(database[0]);
  let spyUpdateOneTodo = jest.spyOn(todoRepository, 'updateOne');
  spyUpdateOneTodo.mockReturnValue(updatedTodo);
  try {
    await todoService.updateOne(database[0].id, {
      priority: 5,
      done: true,
    });
  } catch (error) {
    expect(error.message).toEqual('Wrong entity');
  }
});
test('update new Todo with non-valid body: priority out of range', async () => {
  let updatedTodo = {
    id: database[0].id,
    text: 'Needs to clean house',
    priority: 0,
    done: true,
  };
  let spyGetOneTodo = jest.spyOn(todoRepository, 'findOne');
  spyGetOneTodo.mockReturnValue(database[0]);
  let spyUpdateOneTodo = jest.spyOn(todoRepository, 'updateOne');
  spyUpdateOneTodo.mockReturnValue(updatedTodo);
  try {
    await todoService.updateOne(database[0].id, {
      text: 'Needs to clean house',
      priority: 6,
      done: true,
    });
  } catch (error) {
    expect(error.message).toEqual('Wrong entity');
  }
});
test('update new Todo with non-valid body: added extra property', async () => {
  let updatedTodo = {
    id: database[0].id,
    text: 'Needs to clean house',
    priority: 5,
    done: true,
  };
  let spyGetOneTodo = jest.spyOn(todoRepository, 'findOne');
  spyGetOneTodo.mockReturnValue(database[0]);
  let spyUpdateOneTodo = jest.spyOn(todoRepository, 'updateOne');
  spyUpdateOneTodo.mockReturnValue(updatedTodo);
  try {
    await todoService.updateOne(database[0].id, {
      text: 'Needs to clean house',
      priority: 5,
      done: true,
      mark: 'none',
    });
  } catch (error) {
    expect(error.message).toEqual('Wrong entity');
  }
});
