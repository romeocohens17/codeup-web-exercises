"use strict";

console.log("Yay! I completed the warmup!")

// 4/22

//function fizzBuzz(limit) {
//    if (limit === undefined) {
//        limit = 100
//    }
//    for (let i = 1; i <= 100; i++) {
//        if (i % 15 === 0) {
//            console.log("FizzBuzz")
//        } else if (i % 3 === 0) {
//            console.log("Fizz");
//        } else if (i % 5 === 0) {
//            console.log("Buzz");
//        } else {
//            console.log(i)
//        }
//    }
//}
//
//console.log(fizzBuzz());

function evenOrOdd(input) {
    if (input === undefined) {
        input = 100
    }
    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
            console.log(i + " Even");
        } else {
            console.log(i + " Odd");
        }
    }
}

evenOrOdd()


//function byFiveEvenOrOdd(i) {
//    if(i === undefined) {
//        i = 100
//    }
//    for (val = 1; val > 0; val -= i) {
//        console.log(i)
//    }
//}
//byFiveEvenOrOdd(100)

//04/27

//My Work
//function arrayOfStrings(firstArray, secondArray) {
//    let sportArray = firstArray.split(' ');
//    let playerArray = secondArray.split(' ');
//    return {
//        firstArray: firstArray,
//        SecondArray: {
//            firstLetter: firstLetter,
//        }
//    }
//}
//
//let emptyArray = [];
//
//let firstArray = [
//    "football", "basketball", "volleyball"
//]
//
//let secondArray = [
//    "Brady", "lavine", "nobody"
//]
//
//for (let i = 0; i < firstArray.length; i++) {
//    emptyArray.push(arrayOfStrings(firstArray[i], secondArray[i]))
//}
//
//function show(book, bookNumber) {
//    console.log();
//}
//
//Walk Through
function allFirstLetters(arr) {
    let bucket = "";
    for (let str of arr) {
        bucket += str[0];
        //bucket += str.substring(0,1);
    }
    return bucket;
}

const testArrStrings = ['dog', 'cat', 'frog', 'bat'];
console.log(allFirstLetters(testArrStrings));

//04/28
//Write a function that takes in a string and returns that string in alphabetical order.

function alphabeticalOrder(str) {
    return str.split('').sort().join('');
}

console.log(alphabeticalOrder("codeup"));

//Walk Through

function alphabetize(str) {
    let strArray = str.split('');
    console.log(strArray);
    let sortedArray = strArray.sort();
    console.log(sortedArray);
    return sortedArray.join('');
}

console.log(alphabetize("codeup"));