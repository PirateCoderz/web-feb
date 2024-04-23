console.log("first");

let arr = [1, 4, 5, 10, 78, 33];
console.log(arr);

let string = arr.toString();

// console.log(string);

let joined = arr.join('-');


// console.log(joined);

// console.log(arr);

arr.push(10);

// console.log(arr);

arr.push(15);


// console.log(arr);

arr.pop();
let popped = arr.pop();
// console.log(popped)

// console.log(arr)

let shifted = arr.shift();
// console.log(shifted);
let length = arr.unshift(15);
console.log(arr);
console.log("new Length " + length);

delete arr[3];

console.log(arr);

let first = "Ahmad ";
let last = "Raza";
let full = first.concat(last);
console.log(full)


let newArr = ["Ahmad", ["Zohaib"], ["Umar" , "Ramzan"]];

console.log(arr);
console.log(newArr);
let complete = arr.concat(newArr);
console.log(complete.flat())


