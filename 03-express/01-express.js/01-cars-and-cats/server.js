const express = require("express");

const app = express();
//call the express app above.


//handle you first route
app.get('/', function (request, response) {
    //reponse.send  - send is a handler that will print on the browser
    response.send("<h1>hello express! It's raul. Yippiee!</h1>");    
})

// app.get('/cars.html', function (request, response) {
//     //reponse.send  - send is a handler that will print on the browser
//     response.render(cars.html);
// })


//tell express where to find the static conent meaning the html, css, js.
app.use(express.static(__dirname + "/static"));


//what port are we listening too? 
app.listen(8000, function () {
    console.log("Listening on port 8000");
    
})

