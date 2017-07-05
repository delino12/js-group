//Require express
var express = require('express');
//Require path
var path = require('path');

//Create the app
var app = express();

//Define the app's port
const PORT = process.env.PORT || 8000;

//Use the static files so we can serve the assets
app.use(express.static(path.join(__dirname, 'assets')));

//Serve the index page
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

//Listen on the port
app.listen(PORT, function() {
  console.log('Server Started...');
  console.log('Listening on port ' + PORT);
});
