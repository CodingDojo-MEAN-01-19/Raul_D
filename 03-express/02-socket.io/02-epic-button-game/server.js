const express = require('express');
const app = express();
const path =  require('path');
const port = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, 'client')));

const server = app.listen(port, function(){
    console.log(`listening to port ${port}`)
});

const io = require('socket.io')(server);
    //io is the ewvent emitter it will listen for events and send out events

let count = 0;

    //let count should be in the global scope to be shared across the clients. Otherwise it will not be shared and will give different results to each client.
io.on('connection', socket =>{
    console.log('incoming socket connection');
    socket.on('buttonClicked', function () {
        //count++; is an option or 
    io.emit('numberUpdated', ++count);
        
    });
    socket.on('reset', function(){
        count=0
        io.emit('numberUpdated', count);
    })
});


//.on is the method that listens for events.
//connection is the event to listen for


//alternativly you can also create a function for the same things you are doing more than once.

// let count = 0;

// io.on('connection', socket => {
//     console.log('incoming socket connection.');
//     socket.on('buttonClicked', function () {
//         numberUpdated(++count);
//     });
//     socket.on('reset', function () {
//         numberUpdated(count=0);
//     })
//  socket.emit('numberUpdated', count);
// });

// function numberUpdated(number){
//     io.emit('numberUpdated', number);
// }

