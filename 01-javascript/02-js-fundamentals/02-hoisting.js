// GIVEN
// console.log(example);
// var example = "I'm the example!";
// AFTER HOISTING BY THE INTERPRETER
var example;
console.log(example); // logs undefined
example = "I'm the example!";


// let example; gets hoisted to the top
console.log(example); //undefined
let example = "I'm the example!";    

//1
//var hello gets hoisted

console.log(hello);//undefined
var hello = 'world';                                 

//2
//var needle gets hoisted
//needle = "haystack" goes below the function
//function test() gets hoisted
var needle = 'haystack';
test();
function test() {
    //var needle gets hoisted
    var needle = 'magnet';
    console.log(needle);
}

//3
//var brendan gets hoisted
//brendan = 'super cool' goes below the function print
var brendan = 'super cool';
function print() {
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);


//4
//var food gets hoisted
//food = 'chicken' goes below the function
//function eat gets hoisted
var food = 'chicken';
console.log(food);
eat();
function eat() {
    //var food gets hoisted
    food = 'half-chicken';
    console.log(food);
    //var food stays put
    var food = 'gone'; 
}


//5
mean();
console.log(food);
var mean = function () {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

//6
// var genre gets hoisted
//function rewind() gets hoisted

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    //var genre gets hoisted
    //genre = "r&b" stays put
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

//7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    //var dojo gets hoisted within the scope of the function learn
    //dojo = "burbank" stays put
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

//8
// function makedojo gets hoisted
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    }
    else if (dojo.students <= 0) {
        dojo = "closed for now";
    }
    return dojo;
}
