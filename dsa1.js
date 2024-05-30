// A Common-Sense Guide to Data Structures and Algorithms Level Up Your Core Programming Skills (Jay Wengrow)
// La diferencia entre Array y Set es que Set no permite elementos duplicdos, por lo tanto a la hora de insertar elementos es más lento que un Array ya que tiene que verificar si el elemento ya existe recorriéndolo todo.

//VER ojo, hay que ver si en javascript implica lo mismo

console.log(new Date(Date.now()).toLocaleString() + " dsa1.js loaded");

console.log("Running...");
//create an array with numbers from 1 to 1000
var arrStartTime = Date.now();

let arr = [];
for (let i = 1; i <= 10000000; i++) {
  arr.push(i);
}
var arrEndTime = Date.now();
console.log("Array time: ", arrEndTime - arrStartTime);

// create a set with numbers from 1 to 1000
var setStartTime = Date.now();

let set = new Set();
for (let i = 1; i <= 10000000; i++) {
  set.add(i);
}

var setEndTime = Date.now();
console.log("Set time: ", setEndTime - setStartTime);
arrStartTime = Date.now();
for (let i = 1; i <= 10000000; i++) {
  arr.push(i);
}

var arrEndTime = Date.now();
console.log("Array time: ", arrEndTime - arrStartTime);

var setStartTime = Date.now();
for (let i = 1; i <= 10000000; i++) {
  set.add(i);
}

var setEndTime = Date.now();
console.log("Set time: ", setEndTime - setStartTime);
