// array literal syntax
var fruits = ["apple", "orange", "mongo"];
console.log(fruits);
console.log(fruits[2]);
fruits[2] = "dragon";
console.log(fruits);
// to assign any data type
var fruits3 = ["banana", 3, "papaya", true];
//array constructor
//let fruits2 =new Array("apple2","orange2","mongo2");
var fruits2 = new Array(23, 34, 55.6);
console.log(fruits2);
// push
fruits.push("aa", "bb");
console.log(fruits);
//pop 
fruits.pop();
console.log(fruits);
//shift
fruits.shift();
console.log(fruits);
//unshift
fruits.unshift("aaru");
console.log(fruits);
