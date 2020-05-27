/*
Given an integer n, return a string with n characters such
that each character in such string occurs an odd number of times.

The returned string must contain only lowercase English letters.
If there are multiples valid strings, return any of them.
*/

// const generateTheString = (n) => {
//     let largestOdd;
//     let checkEven = false;
//     let str = ``;

//     if (n === 1) {
//         return `a`;
//     }

//     if (n % 2 === 0) {
//         largestOdd = n - 1;
//         checkEven = true;
//     } else {
//         largestOdd = n - 2;
//     }

//     for (let i = 0; i < largestOdd; ++i) {
//         str += `a`;
//     }

//     if (checkEven) {
//         return (str += `b`);
//     } else {
//         return (str += `bc`);
//     }
// };
// 68ms and 18.98% faster, 35.6mb

const generateTheString = (n) => {
    let str = ``;

    if (n % 2 === 0) {
        str += `b`;
    } else {
        str += `a`;
    }

    for (let i = 0; i < n - 1; ++i) {
        str += `a`;
    }
    return str;
};
// 72ms and 17.06% faster, 35.7mb

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
