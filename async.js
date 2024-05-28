let data1 = null;

setTimeout(() => {
    data1 = "Hello";

    console.log("World");
}, 3000);

setTimeout(() => {
    console.log("Printing");
    console.log(data1);
}, 3010)

let data = null;



// returns a promise

let countValue = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve("Promise resolved");
        console.log(data);
        data = "Promise Data";
    }, 2000);
}).then(function successValue(result) {
    console.log(result);
    console.log(data)
})

    .then(function successValue1() {
        console.log("You can call multiple functions this way.");
    });





