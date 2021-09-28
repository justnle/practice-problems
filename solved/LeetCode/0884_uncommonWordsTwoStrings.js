/*
LeetCode #884 Easy

A sentence is a string of single-spaced separated words where each word
consists only of lowercase letters.

A word is uncommon if it appears exactly once in one of the sentences,
and does not appear in the other sentence.

Given two sentences s1 and s2, return a list of all the uncommon words.
You may return the answer in any order.

Example 1:
Input: s1 = `this is apple is sweet`, s2 = `this apple is sour`
Output: [`sweet`, `sour`]

Example 2:
Input: s1 = `apple apple`, s2 = `banana`
Output: [`banana`]
*/

const uncommonFromSentences = (s1, s2) => {
    const hash1 = {};
    const hash2 = {};
    const results = [];

    for (const word of s1.split(` `)) {
        !hash1[word] ? (hash1[word] = 1) : ++hash1[word];
    }

    for (const word of s2.split(` `)) {
        !hash2[word] ? (hash2[word] = 1) : ++hash2[word];
    }

    for (const word in hash1) {
        if (!hash2[word] && hash1[word] === 1) {
            results.push(word);
        }
    }

    for (const word in hash2) {
        if (!hash1[word] && hash2[word] === 1) {
            results.push(word);
        }
    }
    return results;
};

uncommonFromSentences(`fd kiss fd`, `fd fd kiss`); // [];
