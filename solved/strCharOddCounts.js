/*
LeetCode #1374
Given an integer n, return a string with n characters such
that each character in such string occurs an odd number of times.

The returned string must contain only lowercase English letters.
If there are multiples valid strings, return any of them.
*/

const generateTheString = (n) => {
    let str = `a`;

    if (n % 2 === 0) {
        str = `b`;
    }

    for (let i = 0; i < n - 1; ++i) {
        str += `a`;
    }
    return str;
};
// 60ms and 42.43% faster, 35.6mb

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
