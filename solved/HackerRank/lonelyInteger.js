/*
HackerRank `Lonely Integer`

Given an array of integers, where all elements but one occur twice,
find the unique element.

Example:
a = [1,2,3,4,3,2,1];
The unique elelment is 4.
*/

const lonelyInteger = (a) => {
    const hash = {};

    if (a.length === 1) {
        return a[0];
    }

    for (const num of a) {
        !hash[num] ? (hash[num] = 1) : ++hash[num];
    }

    for (const num in hash) {
        if (hash[num] === 1) {
            return num;
        }
    }
};

lonelyInteger([0, 0, 1, 2, 1]); // 2
