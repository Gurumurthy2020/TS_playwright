//typescript provides function overloading
//1.with same name
//2.but different parameter types and return type
//3.however no of parameter should be same.

function add(no:number,no2:number) ;
function add(no:string,no2:string) ;
function add(no:boolean,no4:boolean) ;

//implemention

function add(no:any,no2:any):any {
    
    return no+no2;
}
let s1=add(1,8);
let s2=add("hi","how are u");
let s3=add(true,false);

console.log(s1);
console.log(s2);
console.log(s3);