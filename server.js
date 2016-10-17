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

app.listen(PORT, function(){
  console.log('Express listening on port ' + PORT + '!');
});
