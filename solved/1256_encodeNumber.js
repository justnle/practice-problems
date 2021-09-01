/*
LeetCode #1256

Given a non-negative integer num, return its encoding string.

The encoding is done by converting the intger to a string using
a secret function that you should deduce from the following table:

n   f(n)
0     ""
1    "0"
2    "1"
3   "00"
4   "01"
5   "10"
6   "11"
7  "000"

Example 1:
Input: num = 23
Output: "1000"

Example 2:
Input: num = 107
Output: "101100"
*/

const encode = (num) => {
    return (num + 1).toString(2).substring(1);
};

encode(23); // "1000"

// 72ms, faster than 100% of js submissions
// 38.6 MB, less than 71.43% of js submissions
