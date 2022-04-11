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
    const indexMap = {};
    const sorted = [];
    const res = [];

    const strSort = (s) => s.split(``).sort().join(``);

    for (const str of strs) {
        sorted.push(strSort(str));
    }

    for (let i = 0; i < sorted.length; ++i) {
        !indexMap[sorted[i]]
            ? (indexMap[sorted[i]] = [i])
            : indexMap[sorted[i]].push(i);
    }

    for (const idx in indexMap) {
        if (indexMap) {
            res.push([...indexMap[idx]]);
        }
    }

    for (const groups in res) {
        if (res) {
            for (const idx of res[groups]) {
                res[groups].splice(res[groups].indexOf(idx), 1, strs[idx]);
            }
        }
    }
    return res;
};

groupAnagrams([`eat`, `tea`, `tan`, `ate`, `nat`, `bat`]);
// [[`bat`], [`nat`, `tan`], [`ate`, `eat`, `tea`]]

// 192ms, faster than 49.29% of js submissions
// 56mb, less than 11.47% of js submissions
