function Cat (catName) {
    var name = catName;
    this.getName = function() {
        return name;
    };
}

Cat.prototype.sayHi = function () {
    console.log('meow');
};

Cat.prototype.numLegs = 4;
var muffin = new Cat('muffin');
var biscuit = new Cat('biscuit');
console.log(muffin, biscuit);

muffin.sayHi();
biscuit.sayHi();
console.log(muffin.numLegs);

muffin.numLegs = 3;
console.log(muffin.numLegs);
