//optional
//we need to give ? to consider optional
function lname(name, age) {
    return (name + " " + age);
}
console.log(lname("guru"));
console.log(lname("guru", 30));
//default params
function getname(name, age) {
    if (age === void 0) { age = 25; }
    return (name + " " + age);
}
//if we not give params for age it will take that
console.log(getname("guru"));
//if we give params it will take that it will not consider ours
console.log(getname("guru", 45));
console.log(getname("guru", undefined));
