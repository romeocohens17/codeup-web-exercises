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

    let index = 0
    for (let name of fourPeoplesNames) {
        console.log(name + " at index " + (index++));
    }
    //for (let i = 0; i <fourPeoplesNames.length; i++) {
    // console.log(fourPeoplesNames + " at index of " + i);
    // }

    //4.
    for (let i = 0; i < fourPeoplesNames.length; i++) {
        console.log("The best names in order form best to decent are: " + fourPeoplesNames[i]);
    }

    //5.
    fourPeoplesNames.forEach(function (fourPeoplesNames, index, array) {
        console.log("The name " + fourPeoplesNames + " can be found in the fourPeoplesNames array at the index of " + index + ". Here is the array: " + array);
    });

    //6.
    function firstName(fourPeoplesNames) {
        console.log("The best name in the array is " + fourPeoplesNames[0].toUpperCase() + ".")
    }

    firstName(fourPeoplesNames);

    function secondName(fourPeoplesNames) {
        console.log("The second best name in the array is " + fourPeoplesNames[1].toUpperCase() + ".");
    }

    secondName(fourPeoplesNames);

    function butNotLeastName(fourPeoplesNames) {
        let lastNameInArray = fourPeoplesNames[fourPeoplesNames.length - 1]
        console.log("The last but not least name in the array is " + lastNameInArray.toUpperCase() + ".");
    }

    butNotLeastName(fourPeoplesNames);


    function first(array) {
        console.log(array(1));
    }

    function second(array) {
        console.log(array(2));
    }

    function last(array) {
        console.log(array(array.length - 1));
    }

    first([1, 2, 3, 4, 5])
    second([1, 2, 3, 4, 5])
    last([1, 2, 3, 4, 5])


})();
