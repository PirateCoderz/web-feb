if (15 === +'15') {
    console.log("Condition is true")
}

let i = 15.55

let j = 15 + i;
console.log(j);

if (false) {
    console.log("Condition is true");
}
else if (true) {
    console.log("2nd condition is true")
}
else {
    console.log("condition is false")
};

let light = 'black';
switch (light) {
    case 'green':
        break;
        console.log('Green is on');


    case 'yellow':
        console.log("yellow is on");
        break;

    case 'red':
        console.log("red is on");
        break;

    default:
        console.log("default is running")
        break;
}


let condition = (light == "black") ? "color is black"  : "color is not black";


console.log(condition);