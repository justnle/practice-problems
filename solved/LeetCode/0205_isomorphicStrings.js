/*
LeetCode #205 - Isomorphic Strings - Easy

Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be
replaced to get t.

All occurences of a character must be replaced with another character
while preserving the order of characters. No two characters may map to the same
character, but a character may map to itself.

Example 1:
Input: s = `egg`, t = `add`
Output: true

Example 2:
Input: s = `foo`, t = `bar`
Output: false

Example 3:
Input: s = `paper`, t = `title`
Output: true
*/

const isIsomorphic = (s, t) => {
    const map = new Map();

    for (let i = 0; i < s.length; ++i) {
        if (!map.has(s[i])) {
            map.set(s[i], t[i]);
        } else {
            if (map.get(s[i]) !== t[i]) {
                return false;
            }
        }
    }
    return new Set([...map.values()]).size === map.size;
};

isIsomorphic(`egg`, `add`); // true
isIsomorphic(`foo`, `bar`); // false
isIsomorphic(`paper`, `title`); // true

// 96ms, faster than 60.66% of js submissions
// 47.3mb, less than 12.63% of js submissions
