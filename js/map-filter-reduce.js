const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//Filter array for objects with at least 3 languages
const TRES = users.filter(obj => obj.languages.length >= 3);
console.log(TRES);

//Map the array of strings so each element is a user's email
const EMAIL = users.map(obj => obj.email);
console.log(EMAIL);

//Reduce the array so that the output is the total number of years experience of users array and theng get average years of experience
const EXPERIENCE = users.reduce((previousValue, currentValue) => previousValue + currentValue.yearsOfExperience, 0
);
console.log(EXPERIENCE);
const AVERAGE = users.reduce((ave, user) => ave + user.yearsOfExperience / users.length, 0);
console.log(AVERAGE);

//Reduce the array to get the longest email from the users array
const LONGEST_EMAIL = (prev, user) => {
    if (prev.email.length > user.email.length) {
        return prev;
    } else {
        return user;
    }
};
let longestEmailLength = users.reduce(LONGEST_EMAIL, {email: []});
console.log(longestEmailLength);

//Reduce the array to get an array of the users name
const NAMES_STRING = users.reduce(
    function (prevVal, currVal) {
        return prevVal + currVal.name + ', ';
    }, 'The instructors are: ')
console.log(NAMES_STRING);

//Bonus: Reduce the array to find the unique languages from each user
// const LANGUAGES = users.map(obj => obj.languages);
// console.log(LANGUAGES);
//
// let flatArray = Array.prototype.concat.apply([], LANGUAGES);
// console.log(flatArray);
//
//     function uniqueLanguages(arr) {
//     const ARRAY = flatArray.reduce((wordCounts, word) => {
//         if (typeof wordCounts[word] === 'undefined') {
//             wordCounts[word] = 1;
//         } else {
//             wordCounts[word] += 1;
//         }
//         return wordCounts;
//     }, []);
//     return ARRAY;
// }
// console.log(uniqueLanguages());
//
const UNIQUE_LANG = users.reduce((langs, user) => {
    for (let lang of user.languages) {
        if (!langs.includes(lang)) {
            langs.push(lang);
        }
    }
    return langs;
}, []);

console.log(UNIQUE_LANG);



