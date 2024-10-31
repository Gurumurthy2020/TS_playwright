function studentName(name) {
    console.log("hi" + name);
    console.log("hi ".concat(name)); //backtick left of 1
}
studentName("guru");
// otional parameter
function studentName1(name) {
    console.log("hi");
    console.log("hi ".concat(name)); //backtick left of 1
}
studentName1();
//default parameter,optional paramter
function studentDetails(name, age, location) {
    if (location === void 0) { location = "chennai"; }
    console.log("welcome " + name);
    console.log("my age is  " + age);
    console.log("my location is " + location);
}
studentDetails("guru", 39, "chen");
console.log("=====");
studentDetails("ishu", 35);
console.log("=====");
studentDetails("aaru", 7, "ambatur");
