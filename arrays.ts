let names :string[]=["guru","hari","ishu"]
console.log(names[0]);

//generics array

let schoolname:Array<string>=["psbb","sankara","abc"];
let schoolid:Array<number>=[12,23,33];
let schoolbus:Array<any>=["sd",12.33,45,true];

// multitype array

let sdf:(string | number )[]=["gur",23.45];
let plm:Array<boolean | string >=[true,true,"asd"];

// array declaration and intiation
let uhg: Array<String>
uhg=["poi","kjh"];


let schoolnames:Array<string>=["psbb","sankara","abc"];
//index based loops
for (let i = 0; i < schoolnames.length; i++) {
    console.log(schoolnames[i])
}

//for in loops
for (const e in schoolnames) {
    console.log(schoolnames[e])        
    }

