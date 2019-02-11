const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');



app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/node_modules/bootstrap/dist")));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
    response.render('index');
})

//route for people
app.get('/people', function (request, response) {
    // use the axios .get() method - provide a url and chain the .then() and .catch() methods
    axios.get('https://swapi.co/api/people')
        .then(data => {
            // log the data before moving on! 
            console.log(data);
            // rather than rendering, just send back the json data!
            response.json(data.data);
        })
        .catch(error => {
            // log the error before moving on!
            console.log(error);
            response.json(error);
        })
    
});
//route for planets
app.get('/planet', function (request, response) {

    axios.get('https://swapi.co/api/planets/')
        .then(data => {
            console.log(data);
            response.json(data.data);
        })
        .catch(error => {
            console.log(error);
            response.json(error);
        })

});

app.listen(8000, function () {
    console.log("listening on port 8000");
});
