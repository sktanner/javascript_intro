/* What is a boolean?
they are either true / false, yes / no, 0 / 1

x = 5  <--- Never do this
var x = 5  <--- Don't do this either
let x = 5  <--- When you might change the value
const x = 5  <--- When you want the value to stay the same

creating a new variable (2 steps):
Declaration- 
let y;

Initialization / variable assignment- 
y = 5;
*/

// How can we make booleans?
let x = Boolean(5) // Function that turns something to a bool
x = Boolean(0) // reassignment
console.log(x)

let z = false //
console.log(typeof z)

let result = 5 > 4
console.log(result)

/*
== / === checks for equality
>=
>
<=
<

&& returns true if both A and B are true
|| returns true if either A or B are true

*/

let flippedBool = !true
console.log(flippedBool)
console.log(!true || false)


// Truthy / Falsey
// Truthy 'test', [1,2], {test:5}, 1
let testResult = Boolean([1, 2])
testResult = Boolean("test")
console.log(testResult)

// Falsey 0, "", {}, null, undefined, NaN
let falseyTest = Boolean("")  // If you try to turn an empty array or object [], {} you get back true
console.log(falseyTest)

// Bonus
let boolConv = !!("teststring") // This is just for exposure
console.log(boolConv)

// Why are they useful?
