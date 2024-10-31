let sdetails={
    name:"guru",
    age:35,
    married:true
}
console.log(sdetails);

type stdetails={
    name:string,
    age:number,
    married:boolean
}

const guruudata:stdetails={
    name:"qaa",
    age:33,
    married:true
}
const guruudata2:stdetails={
    name:"wer",
    age:35,
    married:true
}


console.log(guruudata);
console.log(guruudata2);

const stud={...guruudata,...guruudata2}
console.log(stud);