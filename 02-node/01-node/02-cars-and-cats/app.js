var http = require('http');

var fs = require('fs');
var server = http.createServer(function (request, response) {

    console.log('client request URL: ', request.url);
    if (request.url === '/') {
        fs.readFile('index.html', 'utf8', function (errors, contents) {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(contents);
            response.end();
        });
    }

    else if (request.url === '/stylesheets/style.css') {
        fs.readFile('./stylesheets/style.css', 'utf8', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'text/css' });
            response.write(contents);
            response.end();
        })
    }

    else if (request.url === "/cars/new") {
        fs.readFile('cars/new.html', 'utf8', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'text/html' });
            response.write(contents);
            response.end();
        });
    }

    else if (request.url === "/cars") {
        fs.readFile('views/cars.html', 'utf8', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'text/html' });
            response.write(contents);
            response.end();
        });
    }


    else if (request.url === '/images/auto-788747__480.jpg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/auto-788747__480.jpg', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpg' });
            response.write(contents);
            response.end();
        })
    }
    else if (request.url === '/images/car-49278__480.jpg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/car-49278__480.jpg', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpg' });
            response.write(contents);
            response.end();
        })
    }
    else if (request.url === '/images/cuba-1197800__480.jpg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/cuba-1197800__480.jpg', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpg' });
            response.write(contents);
            response.end();
        })
    }
    else if (request.url === '/images/volkswagen-158463_1280.png') {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/volkswagen-158463_1280.png', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpg' });
            response.write(contents);
            response.end();
        })
    }

    else if (request.url === "/cats") {
        fs.readFile('views/cats.html', 'utf8', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'text/html' });
            response.write(contents);
            response.end();
        });
    }

    else if (request.url === '/images/cat1.png') {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/cat1.png', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/png' });
            response.write(contents);
            response.end();
        })
    }
    else if (request.url === '/images/cat2.jpg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/cat2.jpg', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpg' });
            response.write(contents);
            response.end();
        })
    }
    else if (request.url === '/images/cat3.jpg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/cat3.jpg', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpg' });
            response.write(contents);
            response.end();
        })
    }

    else {
        response.end('URL not found!!!');
    }
});
server.listen(7077);

console.log("Running in localhost at port 6789");
