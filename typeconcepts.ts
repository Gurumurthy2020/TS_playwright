// typescript is statically defined language as we need to give data type eg:java,c,typescript
// dynamically defined language is we dont need to decalre data type and we can change the datatype

let typename:string="guru";

let asd=20;
asd=23;
console.log(asd);

//type interference - based on contenetype it will automatically assign variable in runtime
let qwe="basha";

//type annotatin
let wer:number=741;

//any data type
let ghj:any=95;
ghj="typesc";
console.log(ghj);

//void function
function sdf():void{
    console.log("hi");
}

//return
function qaz():number{
    console.log("hi");
    return 456;
}
//parameter method
function plm(a:number,b:number):number{

    return a+b;
}