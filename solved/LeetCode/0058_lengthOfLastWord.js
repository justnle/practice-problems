/*
LeetCode #58

Given a string s consisting of some words separated by some number of spaces,
return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

Example 1:
Input: s = `Hello World`
Output: 5

Example 2:
Input: s = `   fly me   to   the moon  `
Output: 4

Example 3:
Input: s = `luffy is still joyboy`
Output: 6
*/

const lengthOfLastWord = (s) => {
    const split = s.split(` `);

    for (let i = 0; i < split.length; ++i) {
        if (split[i] === ``) {
            split.splice(i, 1);
            --i;
        }
    }

    return split[split.length - 1].length;
};

lengthOfLastWord(`   fly me   to   the moon  `); // 4

// 123ms, faster than 5.15% of js submissions
// 38.4mb, less than 88.01% of js submissions
