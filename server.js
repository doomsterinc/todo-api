var express = require('express');
var bodyParser = require('body-parser');
var _ = require('underscore');

var app = express();
const PORT = process.env.PORT || 3000;
var todos = [];
var todoNextID = 1;

app.use(bodyParser.json());

app.get('/', function(req, res){
  res.send('TODO API Root');
});

//GET /todos
app.get('/todos', function(req, res){
  res.json(todos);
});
//GET /todos/:id
app.get('/todos/:id', function(req, res){
  var todoId = parseInt(req.params.id, 10);
  var matchedTodo = _.findWhere(todos, {id: todoId});
  if (matchedTodo) {
    res.json(matchedTodo);
  } else {
    res.status(404).send();
  }
});

// POST /todos/
app.post('/todos', function(req, res){
  var body = _.pick(req.body, 'description', 'completed');

  if (!_.isBoolean(body.completed) || !_.isString(body.description) || body.description.trim().length === 0) {
    res.status(400).send();
  }

  body.description = body.description.trim();
  body.id = todoNextID++;
  todos.push(body);

  res.json(body);
});

// DELETE /todos/:id
app.delete('/todos/:id', function(req, res){
  var todoId = parseInt(req.params.id, 10);
  var matchedTodo = _.findWhere(todos, {id: todoId});

  if (!matchedTodo) {
    res.status(404).json({"error": "ID not found"});
  } else {
    todos = _.without(todos, matchedTodo);
    res.json(matchedTodo);
  }
});

//PUT /todos/:id
app.put('/todos/:id', function(req, res){
  var body = _.pick(req.body, 'description', 'completed');
  var validAttributes = {};
  if (body.hasOwnProperty('completed') && _.isBoolean(body.completed)) {
    validAttributes.completed = body.completed;
  } else if (body.hasOwnProperty('completed')) {
    return res.status(400).send();
  }

  if (body.hasOwnProperty('description')) {

  }
});

app.listen(PORT, function(){
  console.log('Express listening on port ' + PORT + '!');
});
