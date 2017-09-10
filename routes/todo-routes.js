const express = require('express');
const todoRoutes = express.Router();
const todosController = require('../controllers/todos-controller');


todoRoutes.get('/', todosController.index);
todoRoutes.post('/', todosController.create);
todoRoutes.get('/add', (req,res) => {
    res.render('todos/todo-add');
});

todoRoutes.get('/:id', todosController.show);

todoRoutes.get('/edit/:id', todosController.edit);
todoRoutes.put('/:id', todosController.update);
todoRoutes.delete('/:id', todosController.delete);

module.exports = todoRoutes;
