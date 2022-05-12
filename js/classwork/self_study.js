"use strict";


//Arrays
const friend1 = 'Michael';
const friend2 = 'Jackie';
const friend3 = 'Steven';

const friends = ['Michael', 'Jackie', 'Steven'];
console.log(friends);

const years = new Array(1994, 1997, 2000);

console.log(years);

function forOf(array) {
    for(let friend of friends) {
        return friend
    }
}

function forLoop(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}

console.log(forLoop(friends));
console.log(forLoop(years));

function forEachLoop(arr) {
    let bucket = [];
    arr.forEach(function(elem) {
        if(typeof elem === "string") {
            bucket.push(elem)
        }
    })
    return bucket
}

console.log(forEachLoop(friends));
console.log(forEachLoop(years));

const bread = ['white', 'wheat']
const fillings = ['ham', 'pb&j', 'steak']

function makeSandwich(arr1, arr2) {
    let bucket = [];
    let s1 = {}
        let s2 = {}
    s1.bread = arr1[0];
    s1.fillings = arr2[0];
    s2.bread = arr1[1];
    s2.fillings = arr2[2];
    bucket.push(s1, s2)
}
console.log(makeSandwich(bread, fillings))



let stringToAlphabetize = "HelloWrold";

let splitString = stringToAlphabetize.split("");

let sortSplitString = splitString.sort();

let joinedString = sortSplitString.join();

stringToAlphabetize.toLowerCase().split("").sort().join();

function alphabetize(str) {
    return str.toLowerCase().split("").sort().join();
}

console.log(alphabetize("SuperDuperTrooper"));

