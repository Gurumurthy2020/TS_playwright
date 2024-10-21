var mark1;
//union type variable is a variable which can store multiple type of values
function abs1(demo) {
    if (typeof (demo) === 'string') {
        console.log('hello' + (demo) + 'this is string');
        return typeof (demo);
        //(console.log(typeof(mark)));
    }
    else {
        console.log('hello' + (demo) + 'this is not string');
        return typeof (demo);
    }
}
abs1("guru");
abs1(100);
