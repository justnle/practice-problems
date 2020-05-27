/*
LeetCode #1304

Given an integer n, return any array containing n unique integers such
that they add up to 0.
*/

const sumZero = (n) => {
    const sumArr = [];
    const reducer = (a, b) => a + b;

    const createArr = (length) => {
        for (let i = 0; sumArr.length < length; ++i) {
            let randomNum = Math.floor(Math.random() * 9);
            randomNum *= Math.floor(Math.random() * 2) === 1 ? 1 : -1;

            if (!sumArr.includes(randomNum)) {
                sumArr.push(randomNum);
            }
        }
    };

    if (n === 1) {
        return [0];
    } else {
        createArr(n);
    }

    while (sumArr.reduce(reducer) !== 0) {
        sumArr.length = 0;
        createArr(n);
    }
    return sumArr;
};

sumZero(5);
sumZero(3); // [-1, 0, 1];
sumZero(1); // [0];
sumZero(23);
