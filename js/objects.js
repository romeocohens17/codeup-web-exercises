"use strict";

(function () {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    let person = {firstName: "Romeo", lastName: "Cohens"};
    console.log(person.firstName);
    console.log(person.lastName);


    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function () {
        return "Hello from " + person.firstName + " " + person.lastName;
    }
    console.log(person.sayHello());


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    let shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    //shoppers.forEach(function(shopper) {
    //   if (shopper.amount > 200) {
    //       let qualify = "Yes, you do qualify for a 12% discount!";
    //       let discountAmount = shopper.amount * .12;
    //       let afterDiscount = shopper.amount * .88;
    //       console.log(shopper.name + " your total is $" + shopper.amount + ". " + qualify + " The amount discounted is $" + discountAmount + ". " + "Your new total is $" + afterDiscount);
    //   }else {
    //       console.log(shopper.name + ", sorry, you don't qualify for a discount." + " Your total is $" + shopper.amount + ".");
    //   }
    //})

    shoppers.forEach(function (shopper) {
        if (shopper.amount > 200) {
            console.log(shopper.name + ", your total is: $" + shopper.amount.toFixed(2) + "." + " You do qualify for a 12% discount." + " The amount you're saving is: $" + shopper.amount.toFixed(2) * .12 + "." + " Your new total is: $" + shopper.amount.toFixed(2) * .88 + ".");
        } else {
            console.log("Sorry " + shopper.name + ", you do not qualify for a discount." + " Your total is: $" + shopper.amount.toFixed(2) + ".")
        }
    })


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    let books = [
        {title: 'Green Eggs and Ham', author: {firstName: 'Dr.', lastName: 'Seuss'}},
        {title: 'To Kill a Mockingbird', author: {firstName: 'Harper', lastName: 'Lee'}},
        {title: 'The Book of Five Rings', author: {firstName: 'Miyamoto', lastName: 'Musashi'}},
        {title: 'Cant Hurt Me', author: {firstName: 'David', lastName: 'Goggins'}},
        {title: 'The Sacred Mushroom and The Cross', author: {firstName: 'John', lastName: 'Allegro'}}
    ];

    // console.log(books[0].title);
    // console.log(books[0].author.firstName);
    // console.log(books[0].author.lastName);
    // console.log(books[0].author);

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    books.forEach(function (book, index) {
        console.log("Book #" + (index + 1) + '\n' + "Title: " + book.title + '\n' + "Author: " + book.author.firstName + " " + book.author.lastName)
    });


    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

   function createBook(title, author) {
       let nameArray = author.split(' ');
       let firstName = nameArray[0];
       let lastName = nameArray[1];
       return {
           title: title,
           author: {
               firstName: firstName,
               lastName: lastName,
           }
       }
   }

    let emptyArray = [];

    let title = [
        "title1", "title2", "title3"
    ]

    let author = [
        "author1F author1L", "author2F author2L","author3F author3L"
    ]

    for (let i = 0; i < title.length; i++) {
        emptyArray.push(createBook(title[i], author[i]))
    }

    function showBookInfo(book, bookNumber) {
        console.log("Book #" + (bookNumber +1) + '\n' + "Title: " + book.title + "\n" + "Author: " + book.author.firstName + " " + book.author.lastName);
    }

    emptyArray.forEach(showBookInfo);
    console.log(emptyArray);

})();
