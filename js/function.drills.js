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

