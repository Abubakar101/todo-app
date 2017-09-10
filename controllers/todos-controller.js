const Todo = require('../models/todo');

const todosController = {};

todosController.index = (req, res) => {
    Todo.findAll()
    .then(todos => {
      res.render('todos/todo-index', {
        message: 'ok',
        data: todos,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
};

todosController.show = (req, res) => {
  Todo.findById(req.params.id)
    .then(todo => {
      res.render('todos/todo-single',{
        message: 'ok',
        data: todo,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

todosController.create = (req, res) => {
    Todo.create({
    title: req.body.title,
    status: req.body.status,
    category: req.body.category,
    description: req.body.description,
  }).then(() => {
    res.redirect('/todos');
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

todosController.edit = (req, res) => {
  Todo.findById(req.params.id)
  .then(todo => {
    res.render('todos/todo-edit',{
      message: 'ok',
      data: todo,
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

todosController.update = (req, res) => {
  Todo.update({
    title: req.body.title,
    status: req.body.status,
    category: req.body.category,
    description: req.body.description,
  }, req.params.id).then(() => {
    res.redirect('/todos');
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

todosController.delete = (req, res) => {
  Todo.destroy(req.params.id)
    .then(() => {
      res.redirect('/todos');
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}

module.exports = todosController;
