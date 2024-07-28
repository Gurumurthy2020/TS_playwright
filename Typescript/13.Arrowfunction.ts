let total=(a:number,b:number): number =>{
    
    let value=a * b ; 
    return value;
}
console.log(total(8,10));

let sum = (x: number, y: number): number => {
    return x + y;
}

console.log(sum(8,255));

class person  {
    fname :string ="aaru" ;
    lname :string ="visu";

     name111():string {
        
        console.log(this.fname  + ' ' + this.lname);
        return this.fname  + ' ' + this.lname;
    }

    getfullname1=(): string => {
        let fname ="guru";
        let lname ="aaru";
        console.log(fname  + ' ' + lname);
        return fname  + ' ' + lname;
     }
}

let p = new person();
console.log(p.name111());
console.log(p.getfullname1());
