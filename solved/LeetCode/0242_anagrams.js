/*
LeetCode #242

Given two strings s and t, return true if t is an anagram of s,
and false otherwise.
*/

const isAnagram = (s, t) => {
    return cleanStr(s) === cleanStr(t);
};

const cleanStr = (str) => {
    return str.replace(/[^\w]/g, ``).toLowerCase().split(``).sort().join(``);
};

isAnagram(`anagram`, `nagaram`);

module.exports = isAnagram;
