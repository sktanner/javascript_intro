// Arrays - are used to store multiple values in a single variable
// - there are array methods that allow us to traverse, as well as mutate the data being stored within the array
// - array are 0 indexed, first value will have an index of 0, and the last item will have an index of the array length - 1

let arr = [ 'first', 'second', 'third']
console.log(arr[arr.length - 1]);

let arr2 = Array(3)
console.log(arr2.length);

// Foreach

let boardGames = ['Monopoly', 'Sorry', 'Risk', 'Clue']
boardGames.forEach(function (game) {
    console.log(game);
})

// Methods

// Array.push() - add an element to the end of an array

let shoppingList = ['eggs', 'milk', 'bread']
console.log(shoppingList.push('salt'));
console.log(shoppingList);

// Array.pop() - removes the last element in our array, and it'll return that element
let shoppingList = ['eggs', 'milk', 'bread']
shoppingList.pop('bread');
console.log(shoppingList);

// Array.unshift() - adds a new element to the beginning of an array
let shoppingList = ['eggs', 'milk', 'bread']
shoppingList.unshift('salt');
console.log(shoppingList);

//Array.shift() - remove the first from the array and return that element
let shoppingList = ['eggs', 'milk', 'bread']
shoppingList.shift('eggs');
console.log(shoppingList);

// Array.map() - transforms the elements in the original array by calling the given function once for each element in the array
let shoppingList = ['eggs', 'milk', 'bread']
console.log(shoppingList.map((item) => item.toUpperCase()));

// Array.filter() - creates a new array with only the elements that pass the test in a given function
let shoppingList = ['eggs', 'milk', 'bread']
console.log(shoppingList.filter(item => item.startsWith('m')));

// Array.find() - returns the first element in an array that passes a test given as a function
let shoppingList = ['eggs', 'milk', 'bread']
console.log(shoppingList.find(item => item.startsWith('e')));

// Array.reduce() - executes a given function for each value of the array and returns a single value
let costs = [2.00, 3.00, 4.00, 5.00]
console.log(costs.reduce((acc, currentValue) => {
    return acc + currentValue
}));

costs.reduce((acc, currentValue) => {
    console.log(acc, currentValue)
    return acc + currentValue;
})

let costs2 = [1, 1, 1, 1, 1]
console.log(costs2.reduce((acc, currentValue) => {
    return acc + currentValue;
},10));

// Array.includes() - determines whether an array has a specific element
let shoppingList = ['eggs', 'milk', 'bread']
console.log(shoppingList.includes('milk'));

// Array.indexOf() - search the array for a specific element and returns its first index, and it will return -1 if the element is not found
let shoppingList = ['eggs', 'milk', 'bread']
console.log(shoppingList.indexOf('milk'));

// Array.findIndex() - returns the index of the first element in an array that passes the test in a given function, returns -1 when the element is not found
let shoppingList = ['eggs', 'milk', 'bread']
console.log(shoppingList.findIndex(item => item.startsWith('b')));

// Array.every() - checks if all elements in an array pass a test given as a function, if there is 1 element that returns a false value, the function returns false and does not check the rest of the elements
let shoppingList = ['eggs', 'milk', 'bread']
console.log(shoppingList.every(item => item.startsWith('b')));
console.log(shoppingList.every(item => item.length > 1));

// Array.concat() - merge two or more arrays, and returns a new array
let shoppingList = ['eggs', 'milk', 'bread']
let shoppingList2 = ['beef', 'sugar']
console.log(shoppingList.concat(shoppingList2));

// Array.slice() - selects a part of an array and returns a new array, selects the elements starting at the provided start arguement, and ends at, but does not include the provided end argument
let shoppingList = ['eggs', 'milk', 'bread', 'salt', 'oranges']
console.log(shoppingList.slice(1,3));

//splice

//Array.sort() - sorts the items in an array, the sort order can either be alphabetical or numeric, and either ascending or descending. By default sort() orders the values as strings in alphabetic and ascending order. Can take in a compare function which indicates if you want to sort by ascending or descending values
let shoppingList = ['eggs', 'milk', 'bread', 'salt', 'oranges']
console.log(shoppingList.sort());

let costs = [3, 2, 67, 5]
console.log(costs.sort((a , b) => b - a ));

// Array.reverse() - reverses the order of the elements in an array
let shoppingList = ['eggs', 'milk', 'bread', 'salt', 'oranges']
console.log(shoppingList.reverse());

// Array.toString() - convert an array into a string
let shoppingList = ['eggs', 'milk', 'bread', 'salt', 'oranges']
console.log(shoppingList.toString());
let stringArr = shoppingList.toString()
console.log(typeof stringArr);

//Array.join() - converts the elements of an array into a string, can accept an optional parameter. "Seperator", which indicates how the elements will be seperated, default seperatr is a comma
let shoppingList = ['eggs', 'milk', 'bread', 'salt', 'oranges']
console.log(shoppingList.join('!, and '));

// Spread operator - indicated by '...' 3 dots, expands the contents of an array and takes them out of the array structure
let shoppingList = ['eggs', 'milk', 'bread', 'salt', 'oranges']
let values = [...shoppingList]
console.log(values);