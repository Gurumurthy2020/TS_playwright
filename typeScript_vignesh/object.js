var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var sdetails = {
    name: "guru",
    age: 35,
    married: true
};
console.log(sdetails);
var guruudata = {
    name: "qaa",
    age: 33,
    married: true
};
var guruudata2 = {
    name: "wer",
    age: 35,
    married: true
};
console.log(guruudata);
console.log(guruudata2);
var stud = __assign(__assign({}, guruudata), guruudata2);
console.log(stud);
