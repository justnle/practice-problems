/*
LeetCode #7

Given a signed 32-bit integer x return x with its digits reversed. If
reversing x causes the value to go outside the signed 32-bit intger range
[-2^31, 2^31 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers
(signed or unsigned).

Example 1:
Input: x = 123
Output: 321

Example 2:
Input: x = -123
Output: -321

Example 3:
Input: x = 120
Output: 21

Example 4:
Input: x = 0
Output: 0
*/

const reverse = (x) => {
    if (x < 0) {
        x = x * -1;
        x = parseInt(x.toString().split(``).reverse().join(``)) * -1;
    } else if (x > 0) {
        x = x.toString().split(``).reverse().join(``);
    } else {
        return x;
    }

    if (x > Math.pow(2, 31) - 1 || x < Math.pow(-2, 31)) {
        return 0;
    }
    return x;
};

reverse(123); // 321
reverse(1534236469); // 0

// 106ms, faster than 19.45% of js submissions
// 40.1mb, less than 90.41% of js submissions
