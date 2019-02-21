var myString: string;
// I can assign myString like this:
myString = "Bee stinger";
// Why is there a problem with this? What can I do to fix this?
//I turned 9 into a string instead of a number.
myString = "9";


//2
function sayHello(name: string) {
  return `Hello, ${name}!`;
}
// This is working great:
console.log(sayHello("Kermit"));
// Why isn't this working? I want it to return "Hello, 9!"
console.log(sayHello("Hello, 9"));

//alternitavely
//I can add another parameter to include a number.
function sayHello(name: string, num: number) {
  return `Hello, ${name} ${num}!`;
}
// This is working great:
console.log(sayHello("Kermit", 10));
// Why isn't this working? I want it to return "Hello, 9!"
console.log(sayHello("Hello", 9));

//3
//we can make the middle name optional by adding a ?
function fullName(firstName: string, lastName: string, middleName?: string) {
  let fullName = `${firstName} ${middleName} ${lastName}`;
  return fullName;
}
// This works:
console.log(fullName("Mary", "Moore", "Tyler"));
// What do I do if someone doesn't have a middle name?
console.log(fullName("Jimbo", "Jones"));


//4
//belt was singular for jay. I fixed it by adding what was required in the interface

interface Student {
  firstName: string;
  lastName: string;
  belts: number;
}
function graduate(ninja: Student) {
  return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
}
const christine = {
  firstName: "Christine",
  lastName: "Yang",
  belts: 2
}
const jay = {
  firstName: "Jay",
  lastName: "Patel",
  belts: 4
}
// This seems to work fine:
console.log(graduate(christine));
// This one has problems:
console.log(graduate(jay));


//5
// I coule not understand this one
var increment = x => x + 1;
// This works great:
console.log(increment(3));
var square = x => { x * x };
// This is not showing me what I want:
console.log(square(4));
// This is not working:
var multiply = x, y => x * y;
// Nor is this working:
var math = (x, y) => let sum = x + y;
let product = x * y;
let difference = Math.abs(x - y);
return [sum, product, difference];




//6
//I could not figure this one out.
class Elephant {
  constructor(public age: number) { }
  birthday = function () {
    this.age++;
  }
}
const babar = new Elephant(8);
setTimeout(babar.birthday, 1000)
setTimeout(function () {
  console.log(`Babar's age is ${babar.age}.`)
}, 2000)
// Why didn't babar's age change? Fix this by using an arrow function in the Elephant class.


