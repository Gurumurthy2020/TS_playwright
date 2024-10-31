function studentName(name:any){
console.log("hi"+name);
console.log(`hi ${name}`); //backtick left of 1
}
studentName("guru")

// optional parameter
function studentName1(name?:any){
    console.log("hi");
    console.log(`hi ${name}`); //backtick left of 1
    }

    studentName1();

//optional paramter which can override 

function studentDetails(name:any,age?:number,location:string="chennai"){
    console.log("welcome "+name);
    console.log("my age is  "+age);
    console.log("my location is "+location);
    }

    studentDetails("guru",39,"chen");
    console.log("=====");
    studentDetails("ishu",35,);
    console.log("=====");
    studentDetails("aaru",7,"ambatur");
