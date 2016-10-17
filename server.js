var express = require('express');
var app = express();
const PORT = process.env.PORT || 3000;
var todos = [{
  id: 1,
  description: "Meet mom for lunch",
  complete: false,
}, {
  id: 2,
  description: "Go to market",
  complete: false,
}
];

app.get('/', function(req, res){
  res.send('TODO API Root');
});

//GET /todos
app.use('/todos', function(req, res){
  res.send(todos);
});
//GET /todos/unique
app.use('/todos/unique', function(req, res){
  res.send(todos[1]);
});

app.listen(PORT, function(){
  console.log('Express listening on port ' + PORT + '!');
});
