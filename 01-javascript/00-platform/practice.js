// function Cat (catName) {
//     var name = catName;
//     this.getName = function() {
//         return name;
//     };
// }

// Cat.prototype.sayHi = function () {
//     console.log('meow');
// };

// Cat.prototype.numLegs = 4;
// var muffin = new Cat('muffin');
// var biscuit = new Cat('biscuit');
// console.log(muffin, biscuit);

// muffin.sayHi();
// biscuit.sayHi();
// console.log(muffin.numLegs);

// muffin.numLegs = 3;
// console.log(muffin.numLegs);


// function greet(name){
//   console.log('hello ' + name);
// }

// greet("Raul");


// let colors = ['blue', 'red'];
// colors[2] = 'green'
// console.log(colors[0]);

// function square(number){
//   return number * number;
// }


// console.log(square(25));


// let x = 10;
// let y = 3;

// console.log(++x);
// console.log(x);

// function goodMorning(greeting){
//   var response = prompt("What is your name?");
//   alert(greeting + " " + response + "!");
// }


// goodMorning("Good Morning");


// var movies = ["avengers", "wonder woman", "black panther"];

// console.log(movies);
// console.log(movies[0]);
// movies.push("Lady Bird");
// console.log(movies);


var movies = ["avengers", "wonder woman", "black panther"];

movies.forEach( movies => alert(movies));


// function favMovie(){
//   var response = prompt("What is your favorite movie?");
//   alert(response + " is my favorite movie");
//   movies.push(response);
// }

// favMovie();
// console.log(movies);
// favMovie();
// console.log(movies);
