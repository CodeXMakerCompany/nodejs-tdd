//Libs
const httpMocks = require('node-mocks-http');
//Models and controllers
const TodoController  = require('../../controllers/todo.controller');
const TodoModel = require('../../model/todo.model');
//Mocks fixtures
const newTodo =  require('../mock-data/new-todo.json');

//Mocking the model of moongoose
TodoModel.create = jest.fn();
let req, res, next;

 
beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next = null;
})

describe('Todo controller tersting group', () => {

    it('should have a createTodo function', () => {
        expect(typeof TodoController.createTodo).toBe('function');
    });

    it('should call todoModel.create', () => {
        req.body = newTodo;

        TodoController.createTodo(req, res, next);
        expect(TodoModel.create).toBeCalled();

        expect(TodoModel.create).toBeCalledWith(newTodo);
    });

    it('should return a response code', () => {
        req.body = newTodo;

        TodoController.createTodo(req, res, next);
        expect(res.statusCode).toBe(201);
        expect(res._isEndCalled()).toBeTruthy();
    });
});