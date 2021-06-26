//Libs
const httpMocks = require('node-mocks-http');
//Models and controllers
const TodoController  = require('../../controllers/todo.controller');
const TodoModel = require('../../model/todo.model');
//Mocks fixtures
const newTodo =  require('../mock-data/new-todo.json');

//Mocking the model of moongoose
TodoModel.create = jest.fn();

describe('Todo controller tersting group', () => {
    it('should have a createTodo function', () => {
        expect(typeof TodoController.createTodo).toBe('function');
    });

    it('should call todoModel.create', () => {
        let req, res, next;
        req = httpMocks.createRequest();
        res = httpMocks.createResponse();
        next = null;

        req.body = newTodo;

        TodoController.createTodo(req, res, next);
        expect(TodoModel.create).toBeCalled();

        expect(TodoModel.create).toBeCalledWith(newTodo);
    });
});