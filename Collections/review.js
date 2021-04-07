// Say you have a list of numbers and you want 2 arrays
// one with evens

// x % 2 == 0 -> even numbers

let demoArr = []
for(let i = 1; i > 100; i++){
    demoArr.push(i)
}

let checkEven = (num) => {
    return num % 2 == 0
}

console.log(demoArr);
console.log(demoArr.filter(elem => elem % 2 == 0)); // filter takes a call back
console.log(demoArr.filter(checkEven)); // this is a function that will be used by the filter method
// this is a function that will be used by the filter method

let splitArr = []
for(let i = 1; i <= 100; i++){
    if (i % 2 == 0) {
        splitArr.push(i)
    } else {
        splitArr.unshift(i)
    }
}
console.log(splitArr);      // on arrays you want to use a for Of loop
for(let curNum of splitArr){
    console.log(curNum);
}
for(let curNum of splitArr){
    console.log(splitArr[curNum]);
}
splitArr.forEach((x) => console.log(x))

// Function Review
let sqr = (x) => {
    return x*x
} // {} - block body, you have to explicitly "return" what you want to give back

let conciseSqr = (x) => x*x // {} - concise body, implicit return
