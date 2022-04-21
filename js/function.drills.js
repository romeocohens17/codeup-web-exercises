//Function Drills

//1.

function isOdd(x) {
    if (isNaN(parseFloat(x))) {
        return false;
    }else {
        return parseFloat(x) %2 !== 0;
    }
}

console.log(isOdd(10));

//2.

function isEven(x) {
    if (isNaN(parseFloat(x))) {
        return false;
    }else {
        return parseFloat(x) % 2 === 0;
    }
}

console.log(isEven(4));

//3.

function Identity(input) {
    return input;
}

console.log(Identity("Hello"));

//4.

function isFive(input) {
    return input === 5;
}

console.log(isFive(5));

//5.

function addFive(input) {
    return parseFloat(input) + 5;
}

console.log(addFive(75));

//6.

function multipleOfFive(i) {
    if (typeof(parseFloat(i) % 5 === 0)) {
    }
}

console.log(multipleOfFive(75));

//7.




