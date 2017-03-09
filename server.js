// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");

// create the express app
var app = express();
var bodyParser = require('body-parser');

// use it!
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view
app.get('/', function(req, res) {
 res.render("index");
});
// post route for adding a user
app.post('/users', function(req, res) {
 console.log("POST DATA", req.body);
 // This is where we would add the user to the database
 // Then redirect to the root route
 res.redirect('/');
});

app.get("/users/:id", function (req, res){
    console.log("The user id requested is:", req.params.id);
    // just to illustrate that req.params is usable here:
    res.send("You requested the user with id: " + req.params.id);
    // code to get user from db goes here, etc...
    // console.log(res);
});



// // ########### SESSION ##########
// // new code:
// var session = require('express-session');
// // original code:
// var app = express();
// // more new code:
// app.use(session({secret: 'codingdojorocks'}));  // string for encryption

// app.post('/users', function (req, res){
//     // set the name property of session.
//     req.session.name = req.body.name;
//     console.log(req.session.name);
//     //code to add user to db goes here!
//     // redirect the user back to the root route.
//     res.redirect('/');
// });



// this is the last thing to go in!
// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});

// What you've learned so far in this chapter:
// How to build an express application from scratch
// How to install, require, and use 3rd party modules
// What an MVC framework is
// How to set up routing rules for your server
// How to tell your server to listen on a specific port
// How to serve static content
// How to render views 
// How to redirect
// The difference between POST and GET
// How to handle POST and GET data
// How to use session (sparingly)
// How to read and write Package.json files
