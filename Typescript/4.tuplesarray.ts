// tuples fixed siz and it will have same order

let person: [string,number]=["guru",400];

let user: [string,number,boolean]=["guru",400,true];

console.log(person[0]);

let data: [string,number][]=[["guru",400],["basha",45]];
console.log(data[0]);
console.log(data[0][1]);

//by pushing we can add data 
let customer: [string,number]=["guru",400];
customer.push("bash",745);
console.log(customer);


let abc:Array<String>=["guru","as"];
abc.push("bal")
console.log(abc);

let pok:[String,Number]=["as",45];
pok.push("fg")
console.log(pok);

let oij:number[]=[45.32,98];
let iug:number=oij.push(74.8);
console.log(iug);
console.log(oij);

let uhc:(String | number | boolean)[]=["ui",99,true];
uhc.push(77);
uhc.push(false);
uhc.push("hg");
console.log(uhc);

let wsdf:[string,number]=["asd",789];
wsdf.push("qa",99);
console.log(wsdf);