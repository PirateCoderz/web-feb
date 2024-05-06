let a ="9";

console.log(a);

a = a + a;

// a = "Ahmad";

console.log(a);

let num = "9";

console.log(+num + 1);

let para = document.getElementById("para");
para.textContent = "paragraph";
let pTag = `<p class="pragraph">Ali's Bag</p>`;
console.log(para.textContent);

// for id Selection
const button = document.getElementById("btn");

// document.getElementsByClassName;

function clicked () {
    para.textContent = "Button is clicked";
}


button.addEventListener("click", clicked);


// textContent , innerHTML , innerText
// backtick uses, backslash uses
// Multiple Events in EventListner