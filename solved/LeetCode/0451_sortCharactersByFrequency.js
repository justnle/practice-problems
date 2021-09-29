/*
LeetCode #451 Medium

Given a string s, sort it in decreasing order based on the frequency of
the characters. The frequency of a character is the number of times it
appears in the string.

Return the sorted string. If there are multiple answers, return any of them.

Example 1:
Input: s = `tree`
Output: `eert`

Example 2:
Input: s = `cccaaa`
Output: `aaaccc`

Example 3:
Input: s = `Aabb`
Output: `bbAa`
*/

const frequencySort = (s) => {
    const hash = {};
    let res = ``;

    for (const char of s.split(``)) {
        !hash[char] ? (hash[char] = 1) : ++hash[char];
    }

    while (res.length !== s.length) {
        const freq = Object.values(hash);
        const max = Math.max(...freq);

        for (const char in hash) {
            if (hash[char] === max) {
                while (hash[char] > 0) {
                    res += char;
                    --hash[char];
                }
                delete hash[char];
            }
        }
    }
    return res;
};

frequencySort(`Aabb`); // `bbAa` or `bbaA`
frequencySort(`tree`); // `eert` or `eetr`

// 92ms, faster than 79.42% of js submissions
// 46.4mb, less than 33.56% of js submissions
