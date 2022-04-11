/*
LeetCode #49 - Group Anagrams - Medium

Given an array of strings str, group the anagrams together. You can return
the answer in any order.

An anagram is a word or phrase formed by rearranging the letters of a
different word or phrase, typically using all the original letters exactly
once.

Example 1:
Input: str = [`eat`,`tea`,`tan`,`ate`,`nat`,`bat`]
Output: [[`bat`],[`nat`,`tan`],[`ate`,`eat`,`tea`]]

Example 2:
Input: str = [``]
Output: [[``]]

Example 3:
Input: str = [`a`]
Output: [[`a`]]
*/

const groupAnagrams = (strs) => {
    const map = {};

    for (const str of strs) {
        const sortedStr = str.split(``).sort().join(``);

        map[sortedStr] ? map[sortedStr].push(str) : (map[sortedStr] = [str]);
    }
    return Object.values(map);
};

groupAnagrams([`eat`, `tea`, `tan`, `ate`, `nat`, `bat`]);
// [[`bat`], [`nat`, `tan`], [`ate`, `eat`, `tea`]]

// 185ms, faster than 54.34% of js submissions
// 53.8mb, less than 46.06% of js submissions
