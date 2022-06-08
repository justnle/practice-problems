/*
LeetCode #242 - Valid Anagram - Medium

Given two strings s and t, return true if t is an anagram of s,
and false otherwise.

An Anagram is a word, phrase, or name formed by rearranging the
letters of a different word or phrase, typically using all the
original letters exactly once.

Example 1:
Input: s = `anagram`, t = `nagaram`
Output: true

Example 2:
Input: s = `rat`, t = `car`
Output: false
*/

const isAnagram = (s, t) => {
    const sMap = {};

    for (const char of s) {
        !sMap[char] ? (sMap[char] = 1) : ++sMap[char];
    }

    for (const char of t) {
        if (!sMap[char]) {
            return false;
        } else {
            --sMap[char];
        }
    }

    return Object.values(sMap).every((val) => val === 0);
};

isAnagram(`anagram`, `nagaram`); // true
isAnagram(`rat`, `car`); // false

// 76ms, faster than 94.56% of js submissions
// 44.3mb, less than 51.59% of js submissions
