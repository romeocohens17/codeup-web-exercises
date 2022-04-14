//Day 3
(function(){}())

function isString(input) {
    return typeof input === "string";
}

console.log(isString("yes"));

function isNumber(input) {
    return isNaN(input);
}

console.log(isNumber(9));

//Function Expressions

const increment = function(x) {
    return x + 1;
}

console.log(increment(9));

//Arrow Functions

const myArrowFunction = (firstname, lastname) => {
    firstname = firstname.toUpperCase()
    lastname = lastname.toUpperCase()
    return firstname + " " + lastname;
}

console.log(myArrowFunction("Romeo", "Cohens"));

const arrowFunction = (name) => "Hello " + name;

console.log(arrowFunction("rome"));

let weekDays = 6

const scopeTest = () => {
    let weekDays = 5
    console.log(weekDays)
}
console.log(weekDays)
scopeTest();







