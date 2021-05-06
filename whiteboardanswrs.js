
let items = ["1", "2", "3", "4", "5"] 
let numbersArr = items.map(item => {
return Number(item)
})
console.log(numbersArr)


// #3
//console.log(numbersArr.reduce((a, c) => a + c))

let reducedNum = numbersArr.reduce((a,c) => a + c)
console.log(reducedNum)

// #6
let snacks = ["chips", "carrots and ranch", "fruit snacks", "crackers with cheese", "fruit", "chocolate"]
let oddSnack = []

for(let index in snacks) index % 2 !== 0 ? oddSnack.push(snacks[index]) : null
console.log(oddSnack)