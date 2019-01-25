function Ninja(name, health, speed = 3, strength = 3) {

    var privateSpeed = speed;
    var privateStrength = strength;

    this.name = name;
    this.health = health;
    this.sayName = function () {
        console.log("Hi my name is " + this.name);
    }
    this.showStats = function () {
        console.log(this.name, privateStrength, privateSpeed, this.health);

    }

    this.drinkShake = function () {
        console.log(this.health + 10);
    }

    this.punch = function(ninjaName){
        console.log(ninjaName + " was punched by " + this.name + " and lost " + (this.health -5) +" health!");

    }

}

var ninja1 = new Ninja("Brian", 4);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkShake();


var ninja2 = new Ninja("Jose", 5);
ninja2.sayName();
ninja2.showStats();
ninja2.drinkShake();

var blueNinja = new Ninja("Goemon", 10);
blueNinja.sayName();
var redNinja = new Ninja("Bill Gates",10);
redNinja.sayName();

redNinja.punch(blueNinja.name);

