function Ninja(name, health, speed = 3, strength = 3) {
    
    var privateSpeed = speed;
    var privateStrength = strength;

    this.name = name;
    this.health = health;
    this.sayName = function () {
        console.log("hi my name is " + this.name);
    }
    this.showStats = function () {
        console.log(this.name, privateStrength, privateSpeed, this.health);

    }

    this.drinkShake = function(){
        console.log(this.health + 10);
    }

}

var ninja1 = new Ninja("Brian", 4);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkShake();
// ninja1.drinkSake();
