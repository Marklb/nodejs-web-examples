// server.js
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

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



//=============================================================
// home page
//=============================================================
function GET_homeRoute(req, res){
  // the render function causes express to use the templating engine
  res.render('pages/home', {
    myCoolVar: "This is a cool string",
    someNumber: 2391,
  });
};
app.get('/', GET_homeRoute);
app.get('/index', GET_homeRoute);
app.get('/home', GET_homeRoute);
// If you are the server on local host you can access the home page from any of these urls:
//  localhost:3050
//  localhost:3050/
//  localhost:3050/index
//  localhost:3050/home


//=============================================================
// Server start
//=============================================================
var server = app.listen(3050, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log("Server Listening at: http://%s:%s", host, port);
});
