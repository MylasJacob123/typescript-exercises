function addNumbers(a: number, b: number): number {
    return a + b;
}

console.log(addNumbers(3, 5));
console.log(addNumbers(10, 20));



let num: number = 4.234545;
let fixedNum: number = parseFloat(num.toFixed(2));

console.log(fixedNum); 



function isStudent(name: string, inClass: boolean ){
   name ='Lebo';
   inClass = true;
    if(inClass){
       console.log(name.toUpperCase())
    }
    else{
     console.log(name.toLowerCase())
    }
    return
}

// function transformString(text: string, toUpperCase?: boolean): string {
//     if (toUpperCase) {
//         return text.toUpperCase();
//     } else {
//         return text.toLowerCase();
//     }
// }

// // Example usage:
// console.log(transformString("Hello World", true));  // Output: "HELLO WORLD"
// console.log(transformString("Hello World", false)); // Output: "hello world"
// console.log(transformString("Hello World"));        // Output: "hello world" (default case)
