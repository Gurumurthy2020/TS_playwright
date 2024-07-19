// typescript is statically defined language as we need to give data type eg:java,c,typescript
// dynamically defined language is we dont need to decalre data type and we can change the datatype

let typename1:string="guru";

let asd1=20;
asd1=23;
console.log(asd1);

//type interference - based on contenetype it will automatically assign variable in runtime
let qwe1="basha";

//type annotatin
let wer1:number=741;

//any data type
let ghj1:any=95;
ghj1="typesc";
console.log(ghj1);

//void function
function sdf1():void{
    console.log("hi");
}

//return
function qaz1():number{
    console.log("hi");
    return 456;
}
//parameter method
function plm1(a:number,b:number):number{

    return a+b;
}