//enum - is constant

//numeric
//non intilized first and intialized second 
enum Browser{
    Safari,
    chrome=5,
    Edge=9,
    Ie=-5
    
}
//console.log(Browser.Safari);
console.log(Browser);

//string
enum Environment{
    Dev="Dev",
    SIT="QA",
    Prod="PROD"
}
console.log(Environment.SIT);

//hetrogenius - combination of string and numeric

enum Status{
    Active="pass",
    Deactive=-1,
    Pending
}

console.log(Status.Active);
console.log(Status.Deactive);
// +1 it will add from previous
console.log(Status.Pending);