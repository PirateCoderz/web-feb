
let fruit = 'Apple';
let array = [true, 10, 30, "Ahmad", false, true];
let fruits = [
    'Apple',
    'Banana',
    'Cherry',
    'Grapes',
    'Melon',
    'WaterMelon'
];


// for(let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
//     console.log("i = " + i);
// }


let i = 0;
// while (i < fruits.length) {

//     if (i == 2) {
//         i++;
//         continue;
//     }

//     console.log(fruits[i]);
//     console.log("i = " + i);
//     // if(i == 2) {
//     //     break;
//     // }
//     i++;

// };

// console.log(i)

i = 0;
// console.log(i)

// do {
//     if (i == 2) {
//         i++;
//         continue;
//     }

//     console.log(fruits[i]);
//     console.log("i = " + i);
//     // if(i == 2) {
//     //     break;
//     // }
//     i++;

// } while(i < fruits.length);


// it prints value at that specific key

// for (const iterator of fruits) {
//     console.log(iterator);
// }

// it prints key at that specific key

// for (const key in fruits) {
//     console.log(key)

// }
// }


let fruitObj = {
    fruitName: "Peach",
    noOfFruits: 10,
    pricePerKg: 100,
}

// for (const iterator of fruitObj) {
//     console.log(iterator);

// }

// fruits.forEach((n) => {
//     console.log(n);
// })




// filter method for array
let filtered = fruits.filter((n) => n == 'Melon'
)


let arr = [
    [
        "apple",
        "banana",
        "grapes",
        "mango",
        "melon"
    ],
    [
        200,
        100,
        150,
        200,
        250
    ],
]

let numbers = [
    200,
    100,
    150,
    200,
    250
];

let collection = 0;
let coll = [];

for (const i of arr) {
    console.log(i);
    for (const j of i) {
        if (j < 200) {
            collection = collection + j;
            coll.push(j);
            console.log(j);
        }
    }
}

console.log(collection);
console.log(coll);

let obj = {
    key: "value",
    index: 1,
    fruit: function datamanip() {

    }
};

console.log(obj.fruit());

// Array methods/functions
// foreach map filter reduce

// function functionName

arr.forEach((i) => {i.forEach((j)=> { console.log(j)}); });

const name = (params) => {

}


arr.map((k) => {
    console.log(k)
});

// let filtering =  arr.map((i)=>{
//     i.filter((j)=>{
//         return (j < 200);
//     }
// )})


let finter = numbers.filter((i) => { return i < 200})

console.log(finter);

name(10);

// Assignment revise these methods. also watch DOM creation DOM Manipulation.