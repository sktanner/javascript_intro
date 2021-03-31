// For .. in Loop
/*
legend:
    keyword = 'for'
    var = some temp word you use to refer to the current item
    iterable = sme collection you want to go through i.e. array, object, string

<keyword>(<var> in <iterable>){
    // do something
}
*/
let person = {
    name: "Sarah",
    age: 28
}
// A look ahead
// console.log(person.name);
// console.log(person["name"]);

for(let property in person){
    // console.log(property); 
    console.log(person[property]);// A good use of a for in loop
}

let randomNums = [1, 9, 30, 31, 11, 29, 53]
for(let rand in randomNums){
    // console.log(rand)
    console.log(randomNums[rand]);
    }

let fullName = "Sarah Tanner"
for (let letterId in fullName){

}