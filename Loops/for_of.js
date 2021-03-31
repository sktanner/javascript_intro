/**/

let students = ['Amy', 'Adam', 'Blake', 'Circe', 'Drew']
for (let student of students){
    console.log(student);
}

let alphabet = 'abcdefghijklmnopqrstuvwxyz'
for (let letter of alphabet){
    console.log(letter)
}

let person = {
    name: "Sarah",
    age: 28
}

for(let entry of Object.entries(person)){
    // console.log(property);
    console.log(entry) // A good use of a for in loop
}

for(let [k, v] of Object.entries(person)){
    // console.log(property)
    console.log(`${k}: ${v}`); // A good use of a for in loop
}