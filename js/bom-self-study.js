"use strict";

let count = 0;
let max = 10;
let interval = 1000; // interval time in milliseconds

let intervalId = setInterval(function () {
    if (count >= max) {
        clearInterval(intervalId);
        console.log('All done');
    } else {
        count++;
        console.log('Repeating this line ' + count);
    }
}, interval);