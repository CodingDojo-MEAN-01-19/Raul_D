// Require the Express Module
var express = require('express');

// Create an Express App
var app = express();
//Require mongoose
var mongoose = require('mongoose');
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App

//for validations you will need express session and express flash
const flash = require('express-flash');
app.use(flash());

var session = require('express-session');

// more new code when using session:
app.use(session({
  secret: 'thisisitthsiisit',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');

// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project. Enter validations here.
mongoose.connect('mongodb://localhost/basic_mongoose', { useNewUrlParser: true });
//lets see if we are connected to the db.
mongoose.connection.on('connected', () => console.log('MongoDB connected.'));

var UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'name is required'],
    minlength: [2, 'min length is 1 character'],
    trim: true
   },
  age: {
    type: Number,
    min: [2,' min 2 characters'],
    max: 150 },

}, { timestamps: true });

mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
var User = mongoose.model('User') // We are retrieving this Schema from our Models, named 'User'
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');
// Routes
// Root Request
app.get('/', function (req, res) {
  // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
  res.render('index');
})
// Add User Request
app.post('/users', function (req, res) {
  console.log("POST DATA", req.body);
  // create a new User with the name and age corresponding to those from req.body
  var user = new User({ name: req.body.name, age: req.body.age });
  // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
  user.save(function (err) {
    // if there is an error console.log that something went wrong!
    if (err) {
      // if there is an error upon saving, use console.log to see what is in the err object
      console.log("We have an error!", err);
      // adjust the code below as needed to create a flash message with the tag and content you would like
      for (var key in err.errors) {
        req.flash('registration', err.errors[key].message);
      }
      // redirect the user to an appropriate route
      res.redirect('/');

    } else { // else console.log that we did well and then redirect to the root route
      console.log('successfully added a user!');
      res.redirect('/');
    }
  })
})

// Setting our Server to Listen on Port: 8000
app.listen(8000, function () {
  console.log("listening on port 8000");
})
