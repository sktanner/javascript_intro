// Conditional Statements

/* 
Conditional sare used to execute a piece of code if a condition is true. They allow our code to make decisions and carry our actions based on those decisions. */

//-If statements
//-Switches
//-Ternaries

// If statements

let mathResult = 2 + 2 === 5;
console.log(mathResult)

if(mathResult)
console.log('This equates to true')

//Block Body + Else

if(mathResult){
    console.log('This equates to true')
}else{
    console.log('This equates to false')
}

// Chaining if/else statements
// Else ifs allows us to provide a new condition to test if the conditions above are not met
let tempF = 55

if(tempF > 95){
    console.log("It's hot!")
}else if(tempF > 50){
    console.log("It's warm!")
}else if(tempF > 32){
    console.log("It's chilly!")
}else if(tempF < 32){
    console.log("It's freezing!")
}else{
    console.log("I cannot provide the weather.")
}

//Testing multiple conditions

let myName = 'Sarah'
let age = 28

if(myName === 'Sarah'){
    console.log('Name Logged')
}else if(age === 28){
    console.log('Age Logged')
}else if(myName === 'Sarah' && age === 28){
    console.log('Name & Age Logged')
}

// Switches
// Run a block of code based on different cases

tempF = 72

switch (true) {
    case tempF > 95:
        console.log("It's hot!")
        break;
    case tempF > 50:
        console.log("It's warm")
        break;
    case tempF > 32:
        console.log("It's chilly")
        break;
    case tempF < 32:
        console.log("It's freezing!")
        break;
    default:
        console.log("I cannot provide the weather")
}

let dog = 'shepherd'

switch(dog){
    case 'husky':
        console.log("The husky jumped in the snow!")
        break;
    case 'lab':
        console.log("The lab caught the ball!")
        break;
    case 'shepherd':
        console.log("The shepherd wagged its tail!")
        break;
}

let firstName = "Joe"

switch(firstName){
    case 'Sarah':
    case 'Justin':
        console.log('They are an instructor')
        break;
    default: console.log('They are a student')
}

//Ternaries
// Condition ? True: False

let lightSwitch = false

lightSwitch ? console.log('Lights are on') : console.log('Lights are off')

tempF = 55

tempF > 95 ? console.log("It's hot!") :
tempF > 50 ? console.log("It's warm!") :
tempF > 32 ? console.log("It's chilly!") :
tempF <= 32 ? console.log("It's freezing!") :
console.log("I cannot provide the weather!")