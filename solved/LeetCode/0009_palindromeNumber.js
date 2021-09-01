/*
LeetCode #9

Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backwards
as forward. For example, 121 is palindrome while 123 is not.

Example 1:
Input: x = 121
Output: true

Example 2:
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left,
it becomes 121-. Therefore it is not a palindrome.

Example 3:
Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not
a palindrome.

Example 4:
Input: x = -101
Output: false
*/

const isPalindrome = (x) => {
    if (x.toString() === x.toString().split(``).reverse().join(``)) {
        return true;
    } else {
        return false;
    }
};

isPalindrome(121); // true

// 176ms, faster than 80.60% of js submissions
// 48.2mb, less than 52.39% of js submissions
