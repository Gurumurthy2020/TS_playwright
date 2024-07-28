var animal = "tiger";
switch (animal) {
    case "elephant":
        console.log("its largest land mammals");
        break;
    case "tiger":
    case "lion":
        console.log((animal) + "  an endangered animal");
        break;
    default:
        console.log(" this animal is not an endangered animal");
        break;
}
