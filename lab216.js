"use strict";

//const humburger =5;
//const fries =0;

//if (humburger && fries) {
 //   console.log ('Im full!');
//}

//console.log(humburger &&  fries);

/* const humburger = 3;
const fries = 1;
const cola=1;

console.log (humburger === 3 && cola && fries);

console.log (1 && 0);
console.log (1 && 5);
console.log (null && 5);
console.log (0 && 'kjskdfjkdsjf');


if (humburger === 3 && cola ===1 && fries) {
    console.log ('All full!');
} else {
    console.log('We are leaving');
} */


const humburger = 3;
const fries = 3;
const cola=0;
const nuggets =2;


if (humburger === 3 && cola ===2 || fries === 3  && nuggets) {
    console.log ('All Happy');
} else {
    console.log('We are leaving');
}

console.log(humburger === 3 && cola ===2); 

console.log (humburger === 3 && cola ===2 || fries === 3  && nuggets);

console.log (humburger || cola || fries);

let johnReport, alexReport, samReport, mariaReport ='done';
console.log (johnReport || alexReport || samReport || mariaReport);

console.log(!0);
