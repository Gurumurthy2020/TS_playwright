//slice :it will return selected item in new array
//also old array will be there
// starts at 1 index and stop before 2 return new array
var okn = ["we", "oi", "oiu", "kjl"];
var sxd = okn.slice(1, 2);
console.log(sxd);
console.log(okn);
//splice : will add or remve element
//will overwrite original arry
//return deleted arry
var okn1 = ["hi", "how", "are", "you"];
var sxd1 = okn1.splice(1, 2, "fine", "thank u");
console.log(sxd1); //it will return deleted item
console.log(okn1);
