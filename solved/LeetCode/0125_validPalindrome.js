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

const isPalindrome2 = (s) => {
    const str = s.replace(/[a-z0-9]/gi, ``).toLowerCase();
    const rev = str.split(``).reverse().join(``);

    return str === rev;
};

isPalindrome2(`A man, a plan, a canal: Panama`); // true;

// 86ms, faster than 71.95% of js submissons
// 46.3mb, less than 47.21% of js submissions
