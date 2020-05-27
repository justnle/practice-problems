/*
Given an integer n, return a string with n characters such
that each character in such string occurs an odd number of times.

The returned string must contain only lowercase English letters.
If there are multiples valid strings, return any of them.
*/

// const generateTheString = (n) => {
//     const alphabet = `abcdefghijklmnopqrstuvwxyz`;
//     const splitAlphabet = alphabet.split(``);
//     let str = ``;

//     if (n === 1) {
//         const randomIndex = Math.floor(Math.random() * splitAlphabet.length);
//         const randomLetter = splitAlphabet[randomIndex];
//         str += randomLetter;
//         return str;
//     }

//     while (str.length !== n) {
//         const randomIndex = Math.floor(Math.random() * splitAlphabet.length);
//         let randomLetter = splitAlphabet[randomIndex];

//         if (!str.includes(randomLetter)) {
//             str += randomLetter;
//         } else if (str.includes(randomLetter) && str.length + 2 <= n) {
//             randomLetter += randomLetter;
//             str += randomLetter;
//         }
//     }
//     return str;
// };
// this solutio takes too long

/*
pseudocode
string.length === n
char % 2 !== 0
char < n

*/

const generateTheString = (n) => {
    let largestOdd;
    let checkEven = false;
    let str = ``;

    if (n === 1) {
        return `a`;
    }

    if (n % 2 === 0) {
        largestOdd = n - 1;
        checkEven = true;
    } else {
        largestOdd = n - 2;
    }

    for (let i = 0; i < largestOdd; ++i) {
        str += `a`;
    }

    if (checkEven) {
        return (str += `b`);
    } else {
        return (str += `bc`);
    }
};
// 68ms and 18.98% faster, 35.6mb

/*
pseudocode
find largest odd number < n
return str += a * largest odd
fill remainder of str with other characters
*/

generateTheString(1);
generateTheString(4); // pppz
generateTheString(2); // xy
generateTheString(7); // holasss
generateTheString(265);
