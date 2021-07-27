/*
HackerRank

Given two strings, determine if they share a common substring.
A substring may be as small as one character.

Example
s1 = `and`
s2 = `art`

These share the common substring `a`

s1 = `be`
s2 = `cat`

These do not share a substring.
*/

const twoStrings = (s1, s2) => {
    const s1Arr = s1.split(``);
    const s2Arr = s2.split(``);
    const s1Hash = {};
    const s2Hash = {};

    for (const char of s1Arr) {
        !s1Hash[char] ? (s1Hash[char] = 1) : (s1Hash[char] += 1);
    }

    for (const char of s2Arr) {
        !s2Hash[char] ? (s2Hash[char] = 1) : (s2Hash[char] += 1);
    }

    for (const char in s1Hash) {
        if (s2Hash.hasOwnProperty(char)) {
            return `YES`;
        }
    }
    return `NO`;
};

twoStrings(`hello`, `world`); // Yes
twoStrings(`hi`, `world`); // No
