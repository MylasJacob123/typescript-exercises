 type StringOrBoolean = string | boolean;

let car: StringOrBoolean;

car = "Most cars are comfortable";
car = true;

function valuePrint(value: StringOrBoolean): void {
    if (typeof value === "string") {
        console.log(" ${value}");
    } else {
        console.log(" ${value}");
    }
}

valuePrint("Most cars are comfortable");
valuePrint(true);