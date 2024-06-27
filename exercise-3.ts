function addNumbers(a: number, b: number): number {
    return a + b;
}

console.log(addNumbers(3, 5));
console.log(addNumbers(10, 20));



let num: number = 4.234545;
let fixedNum: number = parseFloat(num.toFixed(2));

console.log(fixedNum); 



function transformStringz(input: string, toUpperCase: boolean = true ){
    if(toUpperCase){
       return input.toUpperCase();
    }
    else{
     return input.toLowerCase();
    }
    
}

console.log(transformStringz("Jacob",true));
console.log(transformStringz("Jacob",false));
