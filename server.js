// Coding Dojo Assignment I Survey Form
var express = require("express");
// var express = require("express-session");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');

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
app.get('/teapot',
function(req, res) {
    res.sendStatus(418); //Short and Stout
});


var users_array =[
    {
        'name' : 'Matt',
        'dojo_loc' : 'San Jose',
        'fav_lang' : "Arabic",
        'comment' : " I love ES6!"
    },
];

app.get('/result', function(req, res) {
        res.render("results", {users: users_array});
    });

// post route for adding a survey
app.post('/result', function(req, res) {
 console.log("POST DATA", req.body);
 // This is where we would add the user to the database
 var newSubObj ={
     'name' : req.body.name,
     'dojo_loc' : req.body.dojo_loc,
     'fav_lang' : req.body.fav_lang,
     'comment' : req.body.comment,
 }
 users_array.push(newSubObj);
 // Then redirect to the root route
 res.redirect('/result');
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

app.listen(8000, function() {
 console.log("listening on port 8000");
});
