"use strict";

//setInterval()
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

//setTimeout()
let delay = 5000; // delay time in milliseconds

let timeoutId = setTimeout(function () {
    alert('Here is a delayed hello!');
}, delay);

//location() - Redirect browser to google.com

// window.location = 'http://www.google.com';

//location() - Reload Page

location.reload(); // reload page, possibly from cache