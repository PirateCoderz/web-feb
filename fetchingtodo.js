const { retry } = require("async");


function gettingData() {
    return fetch('https://jsonplaceholder.typicode.com/todos');
}


let fetchingData = async () => {
    
    try {

   
    let data2 = await gettingData(); 


    data2 = await data2.json();
    return data2;

    } catch(e) {
         return "Error While fetching data";
    }
}


async function fetching () {

    let data = await fetchingData();

    if(data.success == true) {
        console.log("Data: ");
        console.log(data[0]);
    } else {
        console.log("Data Not Found")
    }
}

fetching();

fetch('https://jsonplaceholder.typicode.com/todos', {
    type: post,
    body: data
})

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