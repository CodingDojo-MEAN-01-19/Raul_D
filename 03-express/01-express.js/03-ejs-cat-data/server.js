const express = require("express");

const app = express();

//ejs cat data

app.get('/', function (request, response) {
    response.send("<h1>This is the cat index.</h1>");
})

app.get('/cats', function (request, response) {
    response.render('cats');
})

app.get("/cuddles", function (request, response) {
    let cuddles_data = [
        { favorite_food: "fish", age: 3, sleeping_spots: "Under the Bed"  },
    ];

    response.render('cuddles', { cuddles: cuddles_data });
})

app.get("/luna", function (request, response) {
    let luna_data = [
        { favorite_food: "Tuna", age: 10, sleeping_spots: "In the fish tank." },
    ];

    response.render('luna', { luna: luna_data });
})

app.get("/garfield", function (request, response) {
    let garfield_data = [
        { favorite_food: "Brownies", age: 4, sleeping_spots: "On the Couch." },
    ];

    response.render('garfield', { garfield: garfield_data });
})


app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');

//what port are we listening too? 
app.listen(8000, function () {
    console.log("Listening on port 8000");

})
