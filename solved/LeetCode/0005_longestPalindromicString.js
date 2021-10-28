/*
LeetCode #5 - Longest Palindromic String - Medium

Given a string s, return the longest palindromic substring in s.

Example 1:
Input: s = `babad`
Output: `bab`
Note: `aba` is also a valid answer

Example 2:
Input: s = `cbbd`
Output: `bb`

Example 3:
Input: s = `a`
Output: `a`

Example 4:
Input: s = `ac`
Output: `a`
*/

const longestPalindrome = (s) => {
    const palindromeArr = [];
    let res = ``;

    const check = (s) => {
        const rev = s.split(``).reverse().join(``);

        if (s === rev && s.length > 0) {
            palindromeArr.push(s);
        }
    };

    for (let i = 0; i < s.length; ++i) {
        for (let j = 1; j <= s.length; ++j) {
            let str = s.slice(i, j);
            check(str);
        }
    }

    for (const palindrome of palindromeArr) {
        if (palindrome.length > res.length) {
            res = palindrome;
        }
    }

    return res;
};

longestPalindrome(`babad`); // `bab` or `aba`
