class Ninja {
    constructor(name, health, speed = 3, strength=3) {

    this.name = name;
    this.health = health;
    this.speed = speed; 
    this.strength = strength;
}

    sayName() {
        console.log(this.name);

    };
    showStats() {
        console.log(this.name, this.health,this.speed,this.strength);

    };

    drinkSake() {
        console.log(this.name, this.health,this.speed,(this.strength+10))

    };

}

const ninja1 = new Ninja("Harry", 4)

ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

class Sensei extends Ninja{
    constructor(name, health = 200, speed=10, strength=10, wisdom=10) {
        
        super(name, health, speed, strength);
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
        this.wisdom = wisdom;
    }
    childFunction(){
        const messageSake = super.drinkSake();
    }
    speakWisdom(){
        const wize = super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }

}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();
