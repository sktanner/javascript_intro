// name(data) -> data out
//f(x) = x * x // square function

/*
Way one:
<keyword> <yourName>(<what i need to work>){
    // What I do
    return <something>// what I want to give back
}
*/

// Two ways to write a function in js
function sqr(x){
    return x * x // 5 * 5
}

console.log(sqr(5))

//let result = (sqr(5))
//console.log(result)

let aSqr = (x) => {
    return x * x // explicit return
}

let bSqr = (x) => x * x // lambda expression / fat arrow
let cSqr = x => x * x // implicit return


function greet(){ // This needs no parameters to work
    console.log("Hello World!")
}
greet()

function betterGreet(fName){ // This is a one parameters function
    console.log("Hello " + fName);
}

betterGreet("Sarah") // Passes in one argument

let createFullName = (fName, lName) => `${fName} ${lName}`

let fullName = createFullName("Sarah", "Tanner")
console.log(fullName)

function add2(x, y) {
    return x + y // This line is not returned from (?)
}
console.log(add2(3, 5))