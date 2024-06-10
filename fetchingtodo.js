



let fetchingData = async () => {
    let data2 = await fetch('https://jsonplaceholder.typicode.com/todos');

    data2 = await data2.json();
    // console.log(data)
    return data2;
}


async function fetching () {

    let data = await fetchingData();

console.log("Data: ");
console.log(data[0]);
}

fetching();

// getText("https://jsonplaceholder.typicode.com/todos/");

// async function getText(file) {
//   let myObject = await fetch(file);
//   let myText = await myObject.json();
//   console.log
//   document.getElementById("demo").innerHTML = myText;
// }


// let countValue = new Promise( (resolve, reject) =>{
//    data =  fetch('https://jsonplaceholder.typicode.com/todos');

//    return data;
// }).then((response) =>{
//     data = response.json();
//     console.log(data)

// })

//     .then((res) => {
        
//         console.log(res)
//     });


//     countValue();