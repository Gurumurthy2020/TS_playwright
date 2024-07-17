// tuples fixed siz and it will have same order
var person = ["guru", 400];
var user = ["guru", 400, true];
console.log(person[0]);
var data = [["guru", 400], ["basha", 45]];
console.log(data[0]);
console.log(data[0][1]);
//by pushing we can add data 
var customer = ["guru", 400];
customer.push("bash", 745);
console.log(customer);
var abc = ["guru", "as"];
abc.push("bal");
console.log(abc);
var pok = ["as", 45];
pok.push("fg");
console.log(pok);
var oij = [45.32, 98];
var iug = oij.push(74.8);
console.log(iug);
console.log(oij);
var uhc = ["ui", 99, true];
uhc.push(77);
uhc.push(false);
uhc.push("hg");
console.log(uhc);
var wsdf = ["asd", 789];
wsdf.push("qa", 99);
console.log(wsdf);
