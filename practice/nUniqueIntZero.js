/*
LeetCode #1304

Given an integer n, return any array containing n unique integers such
that they add up to 0.
*/

const sumZero = (n) => {
    const sumArr = [];

    if (n === 1) {
        return [0];
    }

    if (n % 2 !== 0) {
        sumArr.push(0);
        const arrFill = (n - 1) / 2;

        for (let i = 1; i <= arrFill; ++i) {
            sumArr.push(i);
            sumArr.push(i * -1);
        }
        return sumArr;
    } else {
        const arrFill = n / 2;

        for (let i = 1; i <= arrFill; ++i) {
            sumArr.push(i);
            sumArr.push(i * -1);
        }
        return sumArr;
    }
};
// 64ms, faster than 43.77% and 36.4mb

/*
pseudocode
n = how many unique numbers
sum of all numbers must be 0

*/

sumZero(5);
sumZero(3); // [-1, 0, 1];
sumZero(1); // [0];
sumZero(23);
