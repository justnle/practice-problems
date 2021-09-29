/*
LeetCode #3 - Medium

Given a string s, find the length of the longest substring
without repeating characters.

Example 1:
Input: s = `abcabcbb`
Output: 3

Example 2:
Input: s = `bbbbb`
Output: 1

Example 3:
Input: s = `pwwkew`
Output: 3

Example 4:
Input: s = ``
Output: 0
*/

const lengthOfLongestSubstring = (s) => {
    const dupe = new Map();
    let start = 0;
    let maxLength = 0;

    for (let i = 0; i < s.length; ++i) {
        if (dupe.has(s[i])) {
            start = Math.max(dupe.get(s[i]) + 1, start);
        }
        dupe.set(s[i], i);
        maxLength = Math.max(i - start + 1, maxLength);
    }
    return maxLength;
};

lengthOfLongestSubstring(`abcabcbb`); // 3
