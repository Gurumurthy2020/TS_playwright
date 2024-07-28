var total = function (a, b) {
    var value = a * b;
    return value;
};
console.log(total(8, 10));
var sum = function (x, y) {
    return x + y;
};
console.log(sum(8, 255));
var person = /** @class */ (function () {
    function person() {
        this.fname = "aaru";
        this.lname = "visu";
        this.getfullname1 = function () {
            var fname = "guru";
            var lname = "aaru";
            console.log(fname + ' ' + lname);
            return fname + ' ' + lname;
        };
    }
    person.prototype.name111 = function () {
        console.log(this.fname + ' ' + this.lname);
        return this.fname + ' ' + this.lname;
    };
    return person;
}());
var p = new person();
console.log(p.name111());
console.log(p.getfullname1());
