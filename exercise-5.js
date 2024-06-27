let Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.validateInput = function (value) {
        if (typeof value !== 'number' || isNaN(value)) {
            throw new Error('Invalid input: Input must be a valid number.');
        }
    };
    Calculator.prototype.add = function (a, b) {
        this.validateInput(a);
        this.validateInput(b);
        return a + b;
    };
    Calculator.prototype.subtract = function (a, b) {
        this.validateInput(a);
        this.validateInput(b);
        return a - b;
    };
    Calculator.prototype.multiply = function (a, b) {
        this.validateInput(a);
        this.validateInput(b);
        return a * b;
    };
    Calculator.prototype.divide = function (a, b) {
        this.validateInput(a);
        this.validateInput(b);
        if (b === 0) {
            throw new Error('Division by zero is not allowed.');
        }
        return a / b;
    };
    return Calculator;
}());
let calculator = new Calculator();
try {
    console.log(calculator.add(10, 5));
    console.log(calculator.subtract(10, 5));
    console.log(calculator.multiply(10, 5));
    console.log(calculator.divide(10, 5));
    console.log(calculator.divide(10, 0));
}
catch (error) {
    console.error(error.message);
}
