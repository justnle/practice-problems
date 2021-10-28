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
    let res = ``;

    if (s.length < 1 || s === null) {
        return ``;
    }

    const expandFromCenter = (str, left, right) => {
        let i = 0;

        while (str[left - i] && str[left - i] === str[right + i]) {
            ++i;
        }
        --i;

        return str.slice(left - i, right + i + 1);
    };

    for (let i = 0; i < s.length; ++i) {
        const odd = expandFromCenter(s, i, i);
        const even = expandFromCenter(s, i, i);

        if (odd.length > res.length) {
            res = odd;
        }

        if (even.length > res.length) {
            res = even;
        }
    }
    return res;
};

longestPalindrome(`babad`); // `bab` or `aba`

// 144ms, faster than 67.38% of js submissions
// 41.5mb, less than 72.87% of js submissions
