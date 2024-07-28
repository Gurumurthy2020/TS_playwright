//typescript provides function overloading
//1.with same name
//2.but different parameter types and return type
//3.however no of parameter should be same.
//implemention
function add(no, no2) {
    return no + no2;
}
var s1 = add(1, 8);
var s2 = add("hi", "how are u");
var s3 = add(true, false);
console.log(s1);
console.log(s2);
console.log(s3);
