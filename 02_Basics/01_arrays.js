// array

// way yo define array
let myArr = [1, 2, 3, 4, 6, 7, 8, 9, 10]; // typeof object
let newArr = ["mohan", "rohan", "shohan", "soma", "mona"];

let myArr1 = new Array(2, 4, 6, 7, 12, 8, 8); // typeof object

// console.log(myArr[4]); // access element using index
// console.log(typeof newArr);

// Array Methods
// console.log(myArr);

// myArr.push(10); // add element at last
// myArr.push(20);
// myArr.pop(); // remove last element

// myArr.unshift(0); // add element at first
// myArr.shift(); // remove first element

// console.log(myArr.includes(0)); // return true or false
// console.log(myArr.indexOf(18)); // return index of element

// let myNewArr = myArr.join();

// console.log(myArr);
// console.log(myNewArr); // convert array to string

// slice and splice

console.log("A -", myArr);

let arryTest1 = myArr.slice(1, 3);
console.log("B -", arryTest1);
console.log("* -", myArr);

let arryTest2 = myArr.splice(1, 3);
console.log("C -", arryTest2);
console.log("* -", myArr);
