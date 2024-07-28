// methods
//void
//return
//parameter
function hi() {
    console.log("hi ");
}
hi();
//parameter
function add(a, b) {
    console.log(a + b);
}
// passing argument in 1,5
add(1, 5);
function calculate(a, b) {
    var tot = a + b;
    return tot;
}
var resu = calculate(2, 99);
console.log(resu);
function isuser(username) {
    if (username === "guru") {
        return true;
    }
    else {
        return false;
    }
}
var res = isuser("ishu");
console.log(res);
//anonymous function
var info = function () {
    console.log("hhhh");
};
info();
var abc = function (x, y) {
    return x + y;
};
console.log(abc(1, 2));
