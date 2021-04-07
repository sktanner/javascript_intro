// While Loop
/*
legend:
    keyword = while
    1 = some eval or expression that is true or false

    <keyword>(<1>){}
    // Do something
}
*/

let i = 0
while(i <= 10){
    console.log(i);
    i++             // Know difference between i++ and ++i !!!!! i is read before / or after the increment
}

for(let x=0; x<=10; x++){
    for(let y=0; y<=10; y++){
    console.log(x, y);
    }
}

while(true){
    console.log("Help this loop is always true");
    break; // ? What does this do?   Ends the current loop
}

let names = ["Buffy", "Angel", "Willow", "Xander", "Giles"]
for (let name in names){
    let curName = names[name]
    console.log(curName);
    if (curName == "Willow")
    break;
}

// Break / Continue

let counter = -1
while(counter <= 20){
    counter++
    if (counter % 2 === 1){
        continue // ? what is this?
    }
    console.log(counter);
}


for(let tmp=100; tmp>=0; tmp -= 5){
    console.log(tmp);
}


/*let tmp = 0
while(tmp = 0){
    tmp++
    if (tmp % 5 === 0){
        continue
    }
    console.log(tmp);
}   // WRONG!!!! Eternal loop, hit "control + C" to end
*/

let tmp = 100
while (tmp >= 0){
    console.log(tmp);
    tmp -= 5
}