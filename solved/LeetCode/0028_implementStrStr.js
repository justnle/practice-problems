/*
LeetCode #28

Implement strStr().
Return the index of the first occurrence of needle in haystack, or -1
if needle is not part of haystack.

Example 1:
Input: haystack = `hello`, needle = `ll`
Output: 2

Example 2:
Input: haystack = `aaaaa`, needle = `bba`
Output: -1

Example 3:
Input: haystack = ``, needle = ``
Output: 0
*/

const strStr = (haystack, needle) => {
    if (needle === ``) {
        return 0;
    }

    if (haystack.includes(needle)) {
        return haystack.indexOf(needle);
    } else {
        return -1;
    }
};

strStr(`hello`, `ll`); // 2

// 97ms, faster than 46.50% of js submissions
// 38.3mb, less than 99.80% of js submissions
