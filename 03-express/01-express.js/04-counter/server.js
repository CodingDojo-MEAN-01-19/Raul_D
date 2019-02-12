const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');

app.use(session({
    secret: 'thisiscool',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


app.get('/', function (req, res) {
    //if there is no session for count then let's start one.
    if ( !req.session.count ) {
        req.session.count = 0
    }
    req.session.count++;

    res.render('index', {count: req.session.count});
})

//reset button. have the button reset.
app.get('/reset', function(req, res) {
    req.session.count = 0;
    res.redirect('/');
})

//when user clicks on add it will add to the counter.
app.post('/add', function (req, res) {
    if (!req.session.count)
    req.session.count ++;
    res.redirect('/');
})



app.listen(3000, function () {
    console.log("listening on port 3000");
});

