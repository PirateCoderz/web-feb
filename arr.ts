// Assignment : tospliced method.


let arr = ['ali', 'zain', 'hamza', 'umar', 'ramzan'];
console.log(arr);
let newArr = ['ali', 'zain', 'hamza'];
// console.log(arr);

// console.log(newArr);
// let arr = ['ali', 'zain', 'hamza', 'umar', 'ramzan'];
let returnded = arr.splice(3 , 1, 'Ahmad', 'Zohaib', 'Laiba');
console.log(returnded);

console.log(arr);
// console.log(arr.length);

[ 'ali', 'zain', 'hamza', 'Ahmad', 'Zohaib', 'Laiba', 'ramzan' ]
arr = arr.slice(2, 4);
console.log(arr);