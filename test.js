// Test####
// Here is a given array 
// const arr = [
//   ["apple", "banana"],
//   ["orange", ["grape", "kiwi"]],
//   "mango",
//   ["pineapple", ["pear", "peach"]] 
// ];

// change it to string and add "00" as separator for names. It will return "apple00banana00orange00grape00kiwi00mango00pineapple00pear00peach" this string



// extract elements from nested arrays
// combine elements by separator 00

const arr = [
    ["apple", "banana"],
    ["orange", ["grape", "kiwi"]],
    "mango",
    ["pineapple", ["pear", "peach"]]
];
console.log(arr);

const second = arr.flat();

// console.log(second);

const third = second.flat();

// console.log(third);



const str = third.join("00");

// console.log(str);

const data = arr.toString();

console.log(data);

const splittedArr = data.split(',');
console.log(splittedArr);

const desiredString = splittedArr.join('00');
console.log(desiredString);