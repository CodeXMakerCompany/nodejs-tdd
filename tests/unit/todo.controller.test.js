const TodoController  = require('../../controllers/todo.controller');
const TodoModel = require('../../model/todo.model');

//Mocking the model of moongoose
TodoModel.create = jest.fn();

describe('Todo controller tersting group', () => {
    it('should have a createTodo function', () => {
        expect(typeof TodoController.createTodo).toBe('function');
    });

    it('should call todoModel.create', () => {
        TodoController.createTodo();
        expect(TodoModel.create).toBeCalled();
    });
});