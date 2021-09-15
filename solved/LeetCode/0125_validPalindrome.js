/*
LeetCode #125

Given a string s, determine if it is a palindrome, considering only
alphanumeric characters and ignoring cases.

Example 1:
Input: s = `A man, a plan, a canal: Panama`
Output: true

Example 2:
Input: s = `race a car`
Output: false
*/

const isPalindrome = (s) => {
    const simple = s.replace(/[a-zA-Z0-9]/gi, ``).toLowerCase();

    if (simple === simple.split(``).reverse().join(``)) {
        return true;
    } else {
        return false;
    }
};

isPalindrome(`race a car`); // false
