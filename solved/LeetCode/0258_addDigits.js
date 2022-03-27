/*
LeetCode 258 - Add Digits - Easy

Given an integer num, repeatedly add all its digits until
the result has only one digit, and return it.

Example 1:
Input: num = 28
Output: 2
Explanation: The process is
38 --> 3 + 8 --> 11
11 --> 1 + 1 --> 2
Since 2 has only one digit, return it.

Example 2:
Input: num = 0;
Output: 0
*/

const addDigits = (num) => {
    let numStr = num.toString();

    while (numStr.length > 1) {
        const split = numStr.split(``);
        let sum = 0;

        for (const digit of split) {
            sum += parseInt(digit);
        }

        numStr = sum.toString();
    }
    return numStr;
};

addDigits(38); // 2
addDigits(28);
