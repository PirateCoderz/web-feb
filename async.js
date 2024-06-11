let data1 = null;


function setData() {
    console.log("Data is Strored");
    data1 = "My Data";
}

function getData () {
    console.log("Data: " + data1);
}

console.log("Data0: " + data1);

setTimeout(setData, 2000);
   
console.log("Data1: " + data1);

setTimeout(getData, 5010)

console.log("Data2: " + data1);
















// setTimeout(() => {
//     data1 = "Hello";

//     console.log("World");
// }, 3000);

// setTimeout(() => {
//     console.log("Printing");
    
// }, 3010)

// console.log(data1);
// let data = null;


// function executed(params) {
//     console.log("function is executed");
//     // getting an video from internet 

//     console.log("Video is playing")

// }

// executed();

// console.log("outer Console Output")
// // returns a promise



// let data4 = [
//     {
//         name: "Ali",
//         class: "5th",
//         roll: 10
//     },
//     {
//         name: "Ahmad",
//         class: "8th",
//         roll: 4.44
//     }
// ]


// let countValue = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         resolve("Promise resolved");
//         console.log(data);
//         data = "Promise Data";
//     }, 2000);
// }).then(function successValue(result) {
//     console.log(result);
//     console.log(data)
// })

//     .then(function successValue1() {
//         console.log("You can call multiple functions this way.");
//     });





