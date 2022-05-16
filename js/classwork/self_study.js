"use strict";


//Arrays from Udemy Start
const friend1 = 'Michael';
const friend2 = 'Jackie';
const friend3 = 'Steven';

const friends = ['Michael', 'Jackie', 'Steven'];
console.log(friends);

const years = [1994, 1997, 2000];

console.log(years);

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends.length - 1);

friends[2] = 'Tom';
console.log(friends);

const firstName = 'Jonas'
const jonas = [firstName, 'Schedtmann', 2037 - 1991, 'teacher', friends];

console.log(jonas);
console.log(jonas.length);

let sorted = friends.map(function (value) {
    return value.toLowerCase();
}).sort();

console.log(sorted);

//Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const birthYears = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(birthYears[0]);
const age2 = calcAge(birthYears[1]);
const age3 = calcAge(birthYears[birthYears.length - 1]);

console.log(age1, age2, age3);

const ages = [calcAge(birthYears[0]), calcAge(birthYears[1]), calcAge(birthYears.length - 1)];

console.log(ages);

//Arrays from Udemy End

//Section 7: JavaScript in the Browser: DOM and Events Fundamentals



//End of Section 7: JavaScript in the Browser: DOM and Events Fundamentals

//Loops Class Work

function forOf(array) {
    for(let friend of array) {
        if (friend.includes('a'))
        console.log(friend);
    }
}

forOf(friends);


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

function forSandwich(arr1,arr2){
    let allTheSandwiches = [];
    for (let i=0; i < arr1.length && i < arr2.length; i++){
        let sandwich ={
            bread: arr1[i],
            fillings: arr2[i]
        }
        allTheSandwiches.push(sandwich);
    }
    return allTheSandwiches;
}

console.log(forSandwich(bread, fillings));

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

//End of Loops Class Work


