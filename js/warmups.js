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

//05/02

function sumOfElements(arr) {
    let bucket = 0;
    for (let el of arr) {
        bucket += el;
    }
    return bucket;
}

console.log(sumOfElements([1,2,3,4,5,6]));

function amountTotal(amount) {
    let total = 0;
    for (let i = 0; i < amount.length; ++i) {
        total += amount[i];
    }
    return total;
}

console.log(amountTotal([7,8,9,10]));

//05/03

let product1 = {
    name: 'Hammer',
    priceInCents: 400,
    description: 'It is a a hammer.',
    inventory: 25034
}

let product2 = {
    name: 'Computer',
    priceInCents: 40000,
    description: 'It is a computer.',
    inventory: 33000
}

let product3 = {
    name: 'Ruler',
    priceInCents: 1000,
    description: 'It is a ruler.',
    inventory: 2200
}

function returnProductEssentialDetails(product) {
   return {
       name: product.name,
       priceInCents: product.priceInCents
   }
}

console.log(returnProductEssentialDetails(product1));
console.log(returnProductEssentialDetails(product2));
console.log(returnProductEssentialDetails(product3));

let products = [product1, product2, product3];

function returnAllProductEssentialDetails(products) {
    let productsOutput = [];
    products.forEach(function (product) {
        productsOutput
})
}

//05/10

const hamsters = [
    {
        name: "Hamtaro",
        heightInMM: 86,
        fur: ['orange', 'white'],
        gender: "male",
        dateOfBirth: "August 6"
    } , {
        name: "Bijou",
        heightInMM: 75,
        fur: ['white'],
        gender: "female",
        dateOfBirth: "July 10"
    } , {
        name: "Oxnard",
        heightInMM: 100,
        fur: ['grey', 'white'],
        gender: "male",
        dateOfBirth: "May 3"
    } , {
        name: "Boss",
        heightInMM: 120,
        fur: ['brown', 'white'],
        gender: "male",
        dateOfBirth: "Spetember 21"
    } , {
        name: "Snoozer",
        heightInMM: 85,
        fur: ['brown', 'white', "pink"],
        gender: "male",
        dateOfBirth: "January 14"
    }
];

function mostColorful(hamsters) {
    let mostColors = {fur : []};
    for (let hamster of hamsters) {
        if (hamster.fur.length > mostColors.fur.length) {
            mostColors = hamster;
        }
    }
    return mostColors;
}

function mostColorfullest(hamsters) {
    let mostColorist = hamsters[0];
    for (let x = 1; x < hamsters.length; x++) {
        if (hamsters[x].fur.length > mostColorist.fur.length) {
            mostColorist = hamsters[x];
        }
    }
    return mostColorist;
}

console.log(mostColorfullest(hamsters));
console.log(mostColorfullest(hamsters));


//05/11
function objectFromString(str) {
    const obj = {};
    obj.string = str;
    obj.size = str.length;
    obj.isOneWord = str.indexOf(" ") < 0;
    let lc = str.toLowerCase();
    if (lc.includes("r") || lc.includes("s") || lc.includes("t") || lc.includes("l") || lc.includes("n") || lc.includes("e")) {
        obj.containsLetterFromRSTLNE = true;
    } else {
        obj.containsLetterFromRSTLNE = false;
    }
    return obj;
}

console.log(objectFromString("tacocat"));
console.log(objectFromString("dip"));



