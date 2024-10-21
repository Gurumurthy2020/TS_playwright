// methods
//void
//return
//parameter

function hi() {
    console.log("hi ");
}

hi();

//parameter

function add(a:number,b:number):void{
console.log(a+b);
}

// passing argument in 1,5
add(1,5);

function calculate(a:number,b:number) :number{
    let tot:number=a+b;
    return tot;
}
let resu:number=calculate(2,99);
console.log(resu);

function isuser(username:string):boolean
{
if (username==="guru") {
    return true;
} else {
    return false;
}
}

let res=isuser("ishu");
console.log(res);

//anonymous function

let info=function(){
    console.log("hhhh");
}

info();

let abc =function(x:number,y:number):number{

    return x+y;
}
console.log(abc(1,2));