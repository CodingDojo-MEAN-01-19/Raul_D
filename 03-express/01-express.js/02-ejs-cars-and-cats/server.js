const express = require("express");

const app = express();

//ejs cars and cats

app.get('/', function (request, response) {
    response.send("This is the index.");
})

app.get("/cars", function (request, response) {
 
    response.render('cars');
})

app.get("/cats", function(request, response){
    response.render('cats');
})

app.get("/cars/new", function (request, response) {
    response.render('cars/new');
})


app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views'); 

app.set('view engine', 'ejs');

//what port are we listening too? 
app.listen(3000, function () {
    console.log("Listening on port 3000");

})
