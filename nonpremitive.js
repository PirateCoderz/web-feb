// Non Premitive Datatype
// store data in heap memory storage

// in primitive store data in stacks
// Arrays, Objects, functions

// Arrays: Collection of multiple items

let fruit = 'Apple';
let array = [true, 10 , 30 , "Ahmad", false, true];
let fruits = [
    'Apple',
    'Banana',
    'Cherry',
    'Grapes',
    'Melon',
    'WaterMelon'
];

// console.log(fruits);
// console.log(fruits[1]);

// console.log(fruits.length);

// for (let i = 0; i < fruits.length; i++) {
//  console.log(fruits[i]);
// }


// Objects

let app = ['apple', 15, 20];

let apple = {
    'name' : 'apple',
    'quantity' : 15,
    'price' : 20
};

let melon = {
    'name' : 'melon',
    'quantity' : 4,
    'price' : 50
};

// console.log(apple);

// console.log(melon);


let fruitsData = [
    {
        'name' : 'apple',
        'quantity' : 15,
        'price' : 20
    },
    {
        'name' : 'melon',
        'quantity' : 4,
        'price' : 50
    }
];

console.log(fruitsData[1]);






let length = array.length;
// console.log(length);
// console.log(array[5]);
array[length] = 10;
length = array.length;

array.push(15);
// for storing new element at last index
length = array.length;
// console.log(array[length-1]);
// console.log(array)


array.pop();
// to remove element from last

// console.log(array);





// int = 4bite
// Bool / char = 1bite
// string = 32 bite / 16 bite

// 8bit = 1bite
// 1024bite 1kb

// console.log(array);

// console.log(array.length);

for(let i = 0; i < array.length; i++) {
    // console.log(array[i]);
};


array.forEach(element => {
    
});

// 1024kb 1mb

// 1024mb 1gb

// objects