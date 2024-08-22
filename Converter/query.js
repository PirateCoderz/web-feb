const str = "cars/cupra/ateca/mileAge-to=5000/price-to=3000/registration-date-from=2024";
let parts = str.split('/')
console.log(parts);  // Array format, array length = 6
let partsObj = {}
let obj = [];

for (let i = 0; i < parts.length; i++) {
    // Split each part by '=' to separate key-value pairs
    let keyValue = parts[i].split('=');
    console.log(keyValue);
    obj.push(keyValue)
}


console.log(obj.flat())