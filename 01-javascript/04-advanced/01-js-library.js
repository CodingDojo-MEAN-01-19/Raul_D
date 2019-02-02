

function each(array, beeFree) {
for (let index = 0; index < array.length; index++){
    beeFree(array[index], index);
}

};

const arrayString = ['1','2','3','4','5','6','7'];
//we feed it this and we want it to do what? We feed it arrayString and we want the function to do what with it?
each(arrayString, function (element, index) {
    console.log(`ELEMENT: ${element} and INDEX: ${index}`);
    console.log('Element: ' + element + ' index: ' + index);
    
});


each(arrayString, listItem);

function listItem(item){
    console.log(item);
}

function map(array, callback) {
    const results = [];
    for(let index = 0; index < array.length; index++){
        results.push(callback(array[index], index));
    }
    return results;
}

let results =  map(arrayString, function (element, index) {
    return parseInt(element, 10);
    
});

console.log(results);



function each(array, callback) {
    for (let index = 0; index < array.length; index++) {
        callback(array[index], index);
    }

};

function reduce(array, callback) {
    for (let index = 0; index < array.length; index++) {
        callback(array[index], index);
    }

};

function filter(array, callback) {
    for (let index = 0; index < array.length; index++) {
        callback(array[index], index);
    }

};


function reject(array, callback) {
    for (let index = 0; index < array.length; index++) {
        callback(array[index], index);
    }

};


// var _ = {
//     map: function () {
//         //code here;
//     },
//     reduce: function () {
//         // code here;
//     },
//     find: function () {
//         // code here;
//     },
//     filter: function () {
//         // code here;
//     },
//     reject: function () {
//         // code here;
//     }
// }
// // you just created a library with 5 methods!



// var evens = _.filter([1, 2, 3, 4, 5, 6], function (num) { return num % 2 == 0; });
// console.log(evens); // if things are working right, this will return [2,4,6].
