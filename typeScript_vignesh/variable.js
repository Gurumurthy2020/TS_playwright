var myName = "guru";
var myAge = 30;
var myGender = "Male";
console.log("My name is" + myName + "and my age is" + myAge + "and my gender is " + myGender);
function f(isLoggedIn) {
    //defining variable x with let keyword in function block
    var x = 10;
    if (isLoggedIn) {
        x = 1;
    }
    return x;
}
//calling the function
console.log(f(true));
