//enum - is constant
//numeric
//non intilized first and intialized second 
var Browser;
(function (Browser) {
    Browser[Browser["Chrome"] = 5] = "Chrome";
    Browser[Browser["Edge"] = 9] = "Edge";
    Browser[Browser["Ie"] = -5] = "Ie";
    Browser[Browser["Safari"] = -4] = "Safari";
})(Browser || (Browser = {}));
console.log(Browser.Safari);
console.log(Browser);
//string
var Environment;
(function (Environment) {
    Environment["Dev"] = "Dev";
    Environment["SIT"] = "QA";
    Environment["Prod"] = "PROD";
})(Environment || (Environment = {}));
console.log(Environment.SIT);
//hetrogenius - combination of string and numeric
var Status;
(function (Status) {
    Status["Active"] = "pass";
    Status[Status["Deactive"] = -1] = "Deactive";
    Status[Status["Pending"] = 0] = "Pending";
})(Status || (Status = {}));
console.log(Status.Active);
console.log(Status.Deactive);
console.log(Status.Pending);
