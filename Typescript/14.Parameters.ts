//optional
//we need to give ? to consider optional
function lname(name:string,age ?:number):any {
    
    return(name +" "+ age);
}
console.log(lname("guru"));
console.log(lname("guru",30));

//default params
function getname(name:string , age:number=25) {
    return (name + " " +age);
     
}
//if we not give params for age it will take that
console.log(getname("guru"));
//if we give params it will take that it will not consider ours
console.log(getname("guru",45));

// if we give undefined it will not consider that it will take default
console.log(getname("guru",undefined));