var mark;
//union type variable is a variable which can store multiple type of values
function abs(demo) {
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
abs("guru");
abs(100);
