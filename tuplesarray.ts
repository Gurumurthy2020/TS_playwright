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
