// db-api.js
var sqlite3 = require('sqlite3').verbose();
// var db = new sqlite3.Database('exampledb'); // This will make a db file
var db = new sqlite3.Database(':memory:'); // This just stores the db in memory.


// In an actual system you probably wouldn't have the full db initialization
// script run each time the server is started, but this is an example and I am
// just creating the database in memory each time the server starts.

// Initialize the database
db.serialize(function() {
    db.run("CREATE TABLE IF NOT EXISTS UserNames (name CHAR(20))");
    db.run("INSERT INTO UserNames (name) VALUES (?)", "Bob");
    db.run("INSERT INTO UserNames (name) VALUES (?)", "Joe");
    db.run("INSERT INTO UserNames (name) VALUES (?)", "Steve");
});

var dbApi = {
  getNames: function(req, res) {
    // send() will just send the string directly without using the template engine
    // res.send('Bob, Joe, Steve');

    db.all("SELECT name FROM UserNames", function(err, row){
      // json() will send a json string
      res.json(row);
    });
  },
  getColors: function(req, res) {
    // send() will just send the string directly without using the template engine
    res.send('Blue, Green, Purple, Red');

  }
};

// Node modules are cached when they are first required, so no matter how many
// times I require this module it will only run this file once.
// Each time the module is required after the first it will just point to the
// instance that was returned the first time you required it, is a way to think
// about it I guess.
// What I think it is actually doing is when this script runs I set the variable
// module.exports what ever the exports variable is set to is what is returned
// by the require function for this module. So, any functions or variables you
// want to have access to from this script need to be accessible from the
// module.exports variable.

module.exports = dbApi;
