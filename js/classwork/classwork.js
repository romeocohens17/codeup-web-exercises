(function () {

//Day 3
    'use strict';

    (function () {
    }())

    function isString(input) {
        return typeof input === "string";
    }

    console.log(isString("yes"));

    function isNumber(input) {
        return isNaN(input);
    }

    console.log(isNumber(9));

//Function Expressions

    const increment = function (x) {
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

    function isItANumber(num) {
        return (typeof num === "number") ? "That is a number!" : "That is not a number!";
    }

    console.log(isItANumber(9))

//Switch Statement Exercise

    //  function sandwichPreference(str) {
    //      switch (str) {
    //          case "olive loaf":
    //              return "Congratulations on your bold choice!"
    //          case "brisket":
    //              return "Congratulations on choosing CORRECTLY!"
    //          default:
    //              return "Not huge on " + str + ", but hey whatever makes you happy.";
    //      }
    //  }

    //  let str = prompt("Hey what kinda lunch meat do you like?").toLowerCase().trim();

    //  alert(sandwichPreference(str));


// 04/21 - Loops

    while (true) {
        let mom = confirm("Mom!?");
        if (mom) {
            break;
        }
    }

    alert("hi...")

//04/22 Arrays

    let emptyArray = [];
    let animals = ["dog", "cat", "frog", "bird", "shark"];
    let clifford = ["I heard you like arrays", ["so you can put an array", ["inside of your array"]]];

    console.log(emptyArray); //This method logs the value of an array.
    console.log(animals);
    console.log(clifford);
    console.log(clifford[1]);
    console.log(clifford[1][1]); //This method shows the value of an array within an array.

    console.log(emptyArray.length); //This method logs the length of an array counting the values.
    console.log(animals.length);
    console.log(clifford.length);

    animals[4] = "shark boy"; //This method is used to change the value of an array.
    console.log(animals);

    animals[3] = "bird brain";
    console.log(animals);

    animals[5] = "gorilla"; //This method is used to add a value to an array.
    console.log(animals);

    animals[5] = "gorilla strength";
    console.log(animals);

    //Iterating through arrays
    for (let i = 0; i < animals.length; i++) { //Iterating through array from start - end
        console.log("One of your animals is: " + animals[i]);
    }
    for (let i = animals.length - 1; i >= 0; i--) { //Iterating through array from end - start
        console.log("One of your animals is: " + animals[i]);
    }

    //forEach
    animals.forEach(function (animals, index, array) {
        //if (index % 3 === 0) {  //shows what is displayed in the array at an odd index
        console.log("Animal " + animals + " can be found in the animals array at the index of " + index + ". Here is the array: " + array);
        //  }
    });

    function spiritAnimals(animals) {
        console.log("My spirit animal is a " + animals + ".");
    }

    animals.forEach(spiritAnimals)

    //forOf //create an element for each variable * can't decrement with this method

    let index = 0 // Method to iterate through array by calling variable in the console.log
    for (let animal of animals) {
        console.log(animal + " at index " + (index++));
    }

    console.log(animals.sort())

})();