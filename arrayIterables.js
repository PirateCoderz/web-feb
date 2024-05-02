let array1 = [29, 1, 4, 6, 8, 45, 5, 7, 19];
console.log(array1)

// for (let index = 0; index < array1.length; index++) {
//     // const element = array1[index];
//     // console.log(array1[index])
//     array1[index] = array1[index] + 1;
// }

// console.log(array1);

let arr1 = array1.map((n, index) => {
    console.log(index + " => " + n);
    
return n + 4;
});

let filtered1 = [];
for (let index = 0; index < array1.length; index++) {
    if(array1[index] > 10){
    // console.log(array1[index]);
    filtered1.push(array1[index])
    }
}

let filter = array1.filter((n) => {
    n = n + 10;  
    return (false);
})

let initialAccumulator = 26;

let reducedAccumulated = array1.reduce((n , accumulate) => {
    let j = n + accumulate;
    return j;
}, initialAccumulator);

console.log(reducedAccumulated);

// console.log(filter);
// console.log(filtered);
// console.log(array1);




// DOM => Document Object Model

console.log("Running")
let heading1 = document.getElementsByClassName('heading');

console.log(heading1.innerText);
// heading1.innerHTML = 'array1 Methods Lecture';
heading1.innerText = 'array1 Methods Lecture';

document.querySelector('p').innerText = "paragraph";