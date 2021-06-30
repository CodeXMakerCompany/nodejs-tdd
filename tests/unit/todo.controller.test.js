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
    next = jest.fn();
})

describe('Todo controller tersting group', () => {

    beforeEach(() => {
        req.body = newTodo;
    });

    it('should have a createTodo function', () => {
        expect(typeof TodoController.createTodo).toBe('function');
    });

    it('should call todoModel.create', async () => {

        await TodoController.createTodo(req, res, next);
        expect(await TodoModel.create).toBeCalled();

        expect(await TodoModel.create).toBeCalledWith(newTodo);
    });

    it('should return a response code', async () => {

        await TodoController.createTodo(req, res, next);
        expect(await res.statusCode).toBe(201);
        expect(await res._isEndCalled()).toBeTruthy();
    });

    it('should return a json body in response', async () => {

        TodoModel.create.mockReturnValue(newTodo);
        await TodoController.createTodo(req, res, next);
        expect(await res._getJSONData()).toStrictEqual(newTodo);
    });

    it('should handle errors', async () => {

        const errorMessage = { message: "Done property missing" };
        const rejectedPromise = Promise.reject(errorMessage);

        TodoModel.create.mockReturnValue(rejectedPromise);
        await TodoController.createTodo(req, res, next);
        expect(next).toBeCalledWith(errorMessage);
    });
});