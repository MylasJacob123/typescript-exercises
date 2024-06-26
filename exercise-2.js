// type StringOrBoolean = (string | boolean);

car = "Most cars are comfortable";
car = true;
function printValue(value) {
    if (typeof value === "string") {
        console.log("Hello, ".concat(value, "!"));
    }
    else {
        console.log("The value is ".concat(value, "."));
    }
}
printValue("Hello");
printValue(false);
