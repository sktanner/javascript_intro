//Hoisting

const add2 = (x, y) => { // Arrow functions don't get hoisted
    return x + y
}


console.log( add2(2, 5), adder(2, 5))



// Helpers // other functions down here

function adder(x, y){ // functions can be defined after the call
    return x + y
}