const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');

app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

const io = require('socket.io')(server);
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "/node_modules/bootstrap/dist")));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


app.get('/', function (req, res) {
    res.render('index');
})

app.post('/result', function (req, res) {
    // console.log("POST DATA", req.body);
    // This is where we would add the user to the database

    req.session.name = req.body.name;
    req.session.location = req.body.location;
    req.session.language = req.body.language;
    req.session.comments = req.body.comments;
    console.log(req.session.name);
    console.log(req.session.location);
    console.log(req.session.language);
    console.log(req.session.comments);
    console.log(req.body);
    res.render("result", {name: req.session.name, location: req.session.location, language:req.session.language, comments: req.session.comments});
})



var server = app.listen(3000, function () {
    console.log("listening on port 3000");
});

var route = require('./routes/index.js')(app, server);

//create html form
//set up index route
//set up post route
//set up route with new data to the success page. 