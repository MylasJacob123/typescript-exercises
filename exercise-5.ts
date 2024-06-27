class Calculatorz{

    private validateInput(value: any): void {
        if (typeof value !== 'number' || isNaN(value)) {
            throw new Error('Invalid input: Input must be a valid number.');
        }
    }

    add(a: any, b: any): number {
        this.validateInput(a);
        this.validateInput(b);
        return a + b;
    }

    subtract(a: any, b: any): number {
        this.validateInput(a);
        this.validateInput(b);
        return a - b;
    }

    multiply(a: any, b: any): number {
        this.validateInput(a);
        this.validateInput(b);
        return a * b;
    }

    divide(a: any, b: any): number {
        this.validateInput(a);
        this.validateInput(b);
        if (b === 0) {
            throw new Error('Division by zero is not allowed.');
        }
        return a / b;
    }
}

const calculatorz = new Calculator();

try {
    console.log(calculator.add(10, 5)); 
    console.log(calculator.subtract(10, 5)); 
    console.log(calculator.multiply(10, 5)); 
    console.log(calculator.divide(10, 5)); 
    console.log(calculator.divide(10, 0)); 
} catch (error) {
    console.error(error.message);
}