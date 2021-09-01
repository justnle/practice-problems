/*
HackerRank

Two stirngs are anagrams of each other if the letters of one string
can be rearranged to form the other string. Given a string, find the
number of pairs of substrings of the string that are anagrams of
each other.

Example
s = mom

The list of all anagrammatic pairs is [m, m], [mo, om] at positions
[[0],[2]], [[0,1],[1,2]] respectively.
*/

const sherlockAndAnagrams = (s) => {
    const map = new Map();

    for (let i = 0; i < s.length; ++i) {
        for (let j = i; j < s.length; ++j) {
            const sub = s.substring(i, j + 1);
            const key = sub.split(``).sort().join(``);

            if (map.has(key)) {
                map.set(key, map.get(key) + 1);
            } else {
                map.set(key, 1);
            }
        }
    }

    let result = 0;

    for (const [key, value] of map) {
        if (value > 1) {
            result += countPairs(value);
        }
    }
    return result;
};

const countPairs = (n) => (n * (n - 1)) / 2;
