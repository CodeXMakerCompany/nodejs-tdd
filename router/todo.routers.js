const express = require('express');
const todoControlller = require('../controllers/todo.controller'); 
const router = express.Router();

router.post('/', todoControlller.createTodo);

module.exports = router;