// type StringOrBoolean = (string | boolean);

car = "Most cars are comfortable";
car = true;
function printValue(value) {
    if (typeof value === "string") {
        console.log("".concat(value, "!"));
    }
    else {
        console.log("".concat(value, "."));
    }
}
printValue("Most cars are comfortable");
printValue(true);
