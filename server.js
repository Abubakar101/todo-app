// import express from our dependencies
const express = require('express');
// const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path')
const methodOverride = require('method-override');
// initialize the app
const app = express();

// middlewares
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'))

// where to look for view templates
app.set('views', path.join(__dirname, 'views'));
// what is our templating engine
app.set('view engine', 'ejs');

app.use('/static', express.static(path.join(__dirname, 'public')));
// Our index route!
app.get('/', (req, res) => {
  res.render('index')
})
app.get('/login', (req, res) => {
  res.render('login')
})
app.get('/register', (req, res) => {
  res.render('registration')
})

// import our todo routes & tell the app to use them
const todoRoutes = require('./routes/todo-routes');
app.use('/todos', todoRoutes);



// set the port, either from an environmental variable or manually
const port = process.env.PORT || 3000;
// tell the app to listen on that particular port
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

// Error handler!
app.get('*', (req, res) => {
    res.status(404).send('not found!');
});
