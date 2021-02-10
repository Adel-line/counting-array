"use strict";
const arra = [0];
let counting = 0;
// count 
init();

function init() {
    console.log("Init");
    //make it count
counting ++ ;
// add delay
setTimeout(init, 1000);
console.log(arra);
arra.unshift(counting);
// add values
if (arra.length > 9) {
    console.log("Stop the count");
    arra.pop();
}
}