/*
syntax:
    {
        k1: v1
        k2: v2
    }

keys can be in "" but don't have to be if they are valid var names,
i.e. they don't start with a "number" or have invalid chars, or has spaces

*/

let obj1 = {
    name: "Sarah"
}

let obj2 = {
    "name": "Sarah"
}

// There are 2 ways to get things out of objects "Dot" notation and "square bracket" notation

console.log(obj1.name)
console.log(obj1["name"])

let car = {
    make: "Jeep",
    model: "Wrangler",
    year: 2020,
    miles: 10_000,
    owners: ["Amy", "Josh"]
}
console.log(car.miles)
console.log(car["miles"])
console.log(car.owners[0]) // obj can hold more than just primitive types

let person = {
    fName: "Sarah",
    lName: "Tanner",
    fullName: function(){
        return `${this.fName} ${this.lName}`
    },
    greet: function(greetWorld){
        return `${greetWorld}, ${this.fName}`
    }
}

console.log(person.fName);
console.log(person.fullName());
console.log(person.greet("Hello"))

// This demo shows we can add new keys through assignment
let builderObj = {} // an empty obj
console.log(builderObj);
builderObj.name = "Sarah"
builderObj["age"] = 28
builderObj.greet = function(greetWorld){
    return `${greetWorld}, ${this.name}`
}

console.log(builderObj)
console.log(builderObj.greet("Hello"))

// A look ahead STACKS and QUEUES <= we can build these with objects
// Stacks are LIFO
// Queues are FIFO

// A look ahead at "Classes", special type of way to build an obj
class Dog{
    constructor(breed, age){
        this.breed = breed
        this.age = age
    }
    bark = function(){
        return this.breed + ' Barks!'
    }
}

let fido = new Dog("lab", 25)
console.log(fido.bark());
console.log(fido.breed)