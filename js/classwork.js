//Day 3
'use strict';

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

//Day 5

let doWeHaveMilk = true;

function makePunchBowlOfCereal() {
    console.log("Chomping down on Sugar Smacks!");
}

function goToStore() {
    console.log("Going to Auchan!")
}

let action = (doWeHaveMilk) ? makePunchBowlOfCereal() : goToStore();

//console.log(action);

//Ternary Operator

function isItANumber(num)
{
    return (typeof num === "number") ? "That is a number!" : "That is not a number!";
}
    console.log(isItANumber(9))

//Switch Statement Exercise

function sandwichPreference(str) {
    switch(str) {
        case "olive loaf":
            return "Congratulations on your bold choice!"
        case "brisket":
            return "Congratulations on choosing CORRECTLY!"
        default:
            return "Not huge on " + str + ", but hey whatever makes you happy.";
    }
}

let str = prompt("Hey what kinda lunch meat do you like?").toLowerCase().trim();

alert(sandwichPreference(str));



