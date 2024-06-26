 type StringOrBoolean = string | boolean;

let car: StringOrBoolean;

car = "Most cars are comfortable";
car = true;

function valuePrint(value: StringOrBoolean): void {
    if (typeof value === "string") {
        console.log(`Hello, ${value}!`);
    } else {
        console.log(`The value is ${value}.`);
    }
}

valuePrint("Hello");
valuePrint(false);