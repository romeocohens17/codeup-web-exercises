(function () {
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */


    //1.
    let fourPeoplesNames = ["Romeo", "Roman", "Romero", "Romello"];

    //2.
    console.log(fourPeoplesNames.length);

    console.log(fourPeoplesNames.indexOf("Romeo"));
    console.log(fourPeoplesNames.indexOf("Roman"));
    console.log(fourPeoplesNames.indexOf("Romero"));
    console.log(fourPeoplesNames.indexOf("Romello"));

    //3.
    console.log(fourPeoplesNames);

    console.log(fourPeoplesNames[0]);
    console.log(fourPeoplesNames[1]);
    console.log(fourPeoplesNames[2]);
    console.log(fourPeoplesNames[3]);

    let index = 0
    for (let name of fourPeoplesNames) {
        console.log(name + " at index " + (index++));
    }

    for (let i = 0; i <fourPeoplesNames.length; i++) {
        console.log(fourPeoplesNames + " at index of " + i);
    }

    //4.

    for (let i = 0; i < fourPeoplesNames.length; i++) {
        console.log("The best names in order form best to decent are: " + fourPeoplesNames[i]);
        //console.log(fourPeoplesNames[i]);
    }

    //5.
    fourPeoplesNames.forEach(function (fourPeoplesNames, index, array) {
        console.log("The name " + fourPeoplesNames + " can be found in the fourPeoplesNames array at the index of " + index + ". Here is the array: " + array);
    });

    //forOf

    for(let name of fourPeoplesNames) {
        console.log(name);
    }

    //6.
    function firstName(fourPeoplesNames) {
        return "The best name in the array is " + fourPeoplesNames[0].toUpperCase() + ".";
    }

    console.log(firstName(fourPeoplesNames));

    function secondName(fourPeoplesNames) {
        return "The second best name in the array is " + fourPeoplesNames[1].toUpperCase() + ".";
    }

    console.log(secondName(fourPeoplesNames));

    function butNotLeastName(fourPeoplesNames) {
        let lastNameInArray = fourPeoplesNames[fourPeoplesNames.length - 1]
        return "The last but not least name in the array is " + lastNameInArray.toUpperCase() + ".";
    }

    console.log(butNotLeastName(fourPeoplesNames));


    function first(array) {
        return array[0];
    }

    console.log(first(fourPeoplesNames));

    function second(array) {
        return array[1];
    }

    console.log(second(fourPeoplesNames));

    function last(array) {
        return array[array.length - 1];
    }

    console.log(last(fourPeoplesNames));

    let numbers = [1, 2, 3, 4, 5];

    console.log(first(numbers));
    console.log(second(numbers));
    console.log(last(numbers));


    //Changing things within an array without changing values

    const pizzas = ["pepperoni", "cheese", "meat lovers", "veggie", "hawaiian"];

    pizzas.push("anchovy");

    function logThePizzas() {
        pizzas.forEach(function (pizza) {
            console.log(pizza);
        });
    }

    console.log(logThePizzas());

})();
