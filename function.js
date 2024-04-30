// Block of code that will execute when called not when created

// console.log(a);

const data = (i) => {
    console.log('Function is called/executed');

    console.log(i);


    return 'Data is Returned';

    console.log('Data After Returning');
};



console.log('Data Before Functions Are called');
let returnedData = data(3);


// console.log('Data is Returned');

// let returnedData = 'Data is Returned';


console.log(data(5));
const a = 10;


let str = 'apple';




function charAt(st , index){
    let arr = ['a' , 'p' , 'p', 'l' , 'e'];
    return arr[index];
}