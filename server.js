const express = require('express'),
      bodyParser = require('body-parser'),
      path = require('path'),
      port = process.env.PORT || 8000,
      app = express();

let data = {};

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(request, response) {
  response.render('index');
});

app.get('/results', function(request, response) {
  // response.send(data);
  response.render('results', {data: data})
});

app.post('/process', function(request, response) {
  data = request.body;
  response.redirect('/results');
});

app.listen(port, () => console.log(`listening on port ${port}`));
