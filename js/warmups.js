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
    for (let i =1; i <= 100; i++) {
        if (i % 2 === 0) {
            console.log(i + " Even");
        }else {
            console.log(i + " Odd");
        }
    }
}
evenOrOdd()


function byFiveEvenOrOdd(i) {
    if(i === undefined) {
        i = 100
    }
    for (val = 1; val > 0; val -= i) {
        console.log(i)
    }
}
byFiveEvenOrOdd(100)