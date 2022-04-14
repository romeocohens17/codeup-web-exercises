//1
console.log("Hello from Codeup!");

alert("Welcome to my Website!");

let userInput = prompt("What is your favorite color?");

console.log(alert("Great, " + userInput + " is my favorite color too!"));

let firstMovie = prompt("Please type in name of the movie that you want to rent?");
let timeFirstMovie = parseFloat(prompt("Number of days you wish to rent " + firstMovie + "?"));
console.log(alert("You are choosing to rent " + firstMovie + " for " + timeFirstMovie + " days."));

let secondMovie = prompt("Please type in name of the movie that you want to rent?");
let timeSecondMovie = parseFloat(prompt("Number of days you wish to rent " + secondMovie + "?"));
console.log(alert("You are choosing to rent " + secondMovie + " for " + timeSecondMovie + " days."));

let thirdMovie = prompt("Please type in name of the movie that you want to rent?");
let timeThirdMovie = parseFloat(prompt("Number of days you wish to rent " + thirdMovie + "?"));
console.log(alert("You are choosing to rent " + thirdMovie + " for " + timeThirdMovie + " days."));

let totalDays = (timeFirstMovie + timeSecondMovie + timeThirdMovie);
console.log(confirm("You are choosing to rent " + firstMovie + ", " + secondMovie + ", " + thirdMovie + " for a total of " + totalDays + " days, is that correct?"));
let userResponse = confirm("You will be charged $3 per day for each movie, is that okay?");
console.log(alert("Your total is $" + (totalDays * 3)));
let userPrice = confirm("Checkout: $" +totalDays * 3);

//2

let numberOfJobs = prompt("How many companies did you work for this week?");

console.log(alert("You worked for " + numberOfJobs + " companies this week." ));

let firstJob = prompt("What was the name of the first company that you worked for this week?");

let timeFirstJob = parseFloat(prompt("How many hours did you work for " + firstJob + " this week?"));

let rateFirstJob = parseFloat(prompt("What was your hourly rate for the " + timeFirstJob + " hours worked at " + firstJob + "?"));

let totalFirstJob = (rateFirstJob * timeFirstJob);

console.log(alert("Your total earnings this week from " + firstJob + " is $" + totalFirstJob + "."));

let secondJob = prompt("What was the name of the second company that you worked for this week?");

let timeSecondJob = parseFloat(prompt("How many hours did you work for " + secondJob + " this week?"));

let rateSecondJob = parseFloat(prompt("What was your hourly rate for the " + timeSecondJob + " hours worked at " + secondJob + "?"));

let totalSecondJob = (rateSecondJob * timeSecondJob);

console.log(alert("Your total earnings this week from " + secondJob + " is $" + totalSecondJob + "."));

let thirdJob = prompt("What was the name of the third company that you worked for this week?");

let timeThirdJob = parseFloat(prompt("How many hours did you work for " + thirdJob + " this week?"));

let rateThirdJob = parseFloat(prompt("What was your hourly rate for the " + timeThirdJob + " hours worked at " + thirdJob + "?"));

let totalThirdJob = (rateThirdJob * timeThirdJob);

console.log(alert("Your total earnings this week from " + thirdJob + " is $" + totalThirdJob + "."));

console.log(alert("Your total earnings this week from " + firstJob + ", " + secondJob + ", and " + thirdJob + " is $" + (totalFirstJob + totalSecondJob + totalThirdJob) + "."));

//3
let enrollment = confirm("Click 'Ok' if the class that you're trying to enroll in is not full and does not conflict with your schedule. ");
console.log(alert("Your class enrollment is " + enrollment + "."));

//4



