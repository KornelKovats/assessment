# NodeJS Developer - Exercise 1 

## Exercise description

Create a RESTful API that provides access to a collection called "todos" that contains just the following fields:

- `id`: String. Unique identifier of the todo (can't be set)
- `text`: String. Can only contain english letters. (must be set)
- `priority`: Number. Integer in the range from 1 to 5. (default value is 3)
- `done`: Boolean. (default value is false)

The API must accept JSON request body, and must provide JSON response body.

## Endpoints

### GET /todos

List all of the todos as an array of the todo objects.

### POST /todos

Creates a new todo, sets the given fields from the request body. Returns the new todo object.

### GET /todos/:id

Returns the todo object.

### PUT /todos/:id

Updates the given fields in the todo. Returns the new todo object.

### DELETE /todos/:id

Removes a todo from the collection.

# App
```
npm install
npm start
```
Test:
```
npm run test
```
## Deployed Version

url: https://kornelkovats-todo-app.azurewebsites.net/todos

GET all todos: 
curl -H "Content-Type: application/json" \ 
  -X GET https://kornelkovats-todo-app.azurewebsites.net/todos

GET one todo:
curl -H "Content-Type: application/json" \ 
  -X GET https://kornelkovats-todo-app.azurewebsites.net/todos/theidhere

POST insert new todo:
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"text":"Need to clean the car"}' \
  https://kornelkovats-todo-app.azurewebsites.net/todos

PUT update todo:
curl --header "Content-Type: application/json" \
  --request PUT \
  --data '{"text":"Update text"}' \
  https://kornelkovats-todo-app.azurewebsites.net/todos/theidhere

DELETE todo:
curl --header "Content-Type: application/json" \
  --request DELETE \
  https://kornelkovats-todo-app.azurewebsites.net/todos/theidhere

