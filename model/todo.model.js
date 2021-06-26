const { Schema, model } = require('mongoose');

const TodoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        required: true
    }
});

const TodoModel = model('Todo', TodoSchema);

module.exports = TodoModel;
