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

const lengthOfLastWord = (s) => s.trim().split(` `).pop().length;

lengthOfLastWord(`   fly me   to   the moon  `); // 4

// 56ms, faster than 99.66% of js submissions
// 38.7mb, less than 70.50% of js submissions
