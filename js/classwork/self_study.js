"use strict";


//Arrays
const friend1 = 'Michael';
const friend2 = 'Jackie';
const friend3 = 'Steven';

const friends = ['Michael', 'Jackie', 'Steven'];
console.log(friends);

const years = new Array(1994, 1997, 2000);

console.log(years);

function forLoop(friends) {
    for (let i = 0; i < friends.length; i++) {
        console.log(friends[i])
    }
}

console.log(forLoop(friends));