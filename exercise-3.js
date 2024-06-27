function addNum(a, b) {
    return a + b;
}
 console.log(addNum(1,4))



num = 4.234545;
fixedNum = parseFloat(num.toFixed());
console.log(fixedNum);



function transformString(input, toUpperCase = true) {
    if (toUpperCase) {
        return input.toUpperCase();
    } else {
        return input.toLowerCase();
    }
}
console.log(transformString("Jacob",true));
console.log(transformString("Jacob",false));
