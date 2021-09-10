/*
LeetCode #66

You are given a large integer represented as an integer array digits, where
each digits[i] is the i^th digit of the integer. The digits are ordered from
most significant to least significant in left-to-right order. The large
integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

Example 1:
Input: digits = [1,2,3]
Output: [1,2,4]

Example 2:
Input: digits = [4,3,2,1]
Output: [4,3,2,2]

Example 3:
Input: digits = [0]
Output: [1]

Example 4:
Input: digits = [9]
Output: [1,0]
*/

const plusOne = (digits) => {
    let digitStr = ``;

    for (const digit of digits) {
        digitStr += digit.toString();
    }

    const num = BigInt(digitStr) + BigInt(1);

    return num.toString().split(``);
};

plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]);
// [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]

// 76ms, faster than 51.45% of js submissions
// 38.8mb, less than 60.05% of js submissions
