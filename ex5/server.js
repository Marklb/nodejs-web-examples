// server.js
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// Since this js file is not in the node_modules directory I have to provide an absolute or relative path
var dbApi = require('./api/db-api');

// Use ejs template engine
app.set('view engine', 'ejs');
// Use body-parser plugin to easily read post request data
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


// Set any directory with resources (css, js, imgs, etc) as a static directory
// Anything in a static directory can be requested without needing a route.
// When setting the path to the file just treat each of the static directories
// as the root directory.
// Example to include styles.css which would normally be requested in an html
// file as 'public/styles.css':
//    <link rel="stylesheet" type="text/css" href="styles.css">
// 'public/' isn't needed because 'public/' is a static directory
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules/jquery/dist'));

// Node modules with resources needed
// **Once we get started on the project I think using a build tool would be better, which would
//     eliminate the need to have these resources available, since they would be built into the
//     single js bundle built by the tool.
app.use(express.static(__dirname + '/node_modules/react/dist'));
app.use(express.static(__dirname + '/node_modules/react-dom/dist'));


//=============================================================
// Home page
//=============================================================
function GET_homeRoute(req, res){
  // the render function causes express to use the templating engine
  res.render('pages/home');
};
app.get('/', GET_homeRoute);
app.get('/index', GET_homeRoute);
app.get('/home', GET_homeRoute);


//=============================================================
// Users page
//=============================================================
app.get('/users', function(req, res){
  // Not going to pass any variables to the template in this example
  res.render('pages/users');
});


//=============================================================
// Database API
//=============================================================
app.get('/api/names', dbApi.getNames);
app.post('/api/add-name', dbApi.addName);
app.get('/api/colors', dbApi.getColors);


//=============================================================
// Server start
//=============================================================
var server = app.listen(3050, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log("Server Listening at: http://%s:%s", host, port);
});
