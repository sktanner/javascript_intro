/*
Classes are a template for creating objects.
They encapsulate data with code to work on that data.
*/

/* syntax
Class declarations

Class <some class name>{
    constructor(<things needed to build the class>, <...>, ...){
    <this>
    }
}


Class expression

let <class name> = class {
    constructor(<things needed to build the class>, <...>, ...){
    <this>
    }
}
*/

// ??? build a class and store data using the constructor
class Animal {
    constructor(name, isCute){
        this.name = name
        this.isCute = isCute
    }
}

let dog = new Animal("lab", true) // this makes an instance of the class
let bat = new Animal("bat", false)
console.log(dog.name, bat);

bat.isCute = true // you still can update the data in the class instance

let animalNames = ["shark", "zebra", "sugar glider"]
let animalArr = animalNames.map(animal => new Animal(animal, undefined))
console.log(animalArr)

// let animalArr = animalNames.map(animal => {
//     return {
//         name : animal,
//         isCute : undefined
//     }})



class Point {
    constructor (x, y){
        this.x = x
        this.y = y
    }
    data() {
        return [this.x, this.y]
    }
}

let p1 = new Point(5, 6)
console.log(p1)
console.log(p1.data())



class Student {
    constructor(name, grade){
        this.name = name
        this.grade = grade
    }
    greet(){
        return `Hello my name is ${this.name}`
    }
}

let aaron = new Student("aaron", 12)
console.log(aaron.greet());