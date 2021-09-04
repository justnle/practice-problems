/*
LeetCode #14

Write a function to find the longest common prefix string amonst an
array of strings. If there is no common prefix, return an empty string ``.
*/

const longestCommonPrefix = (strs) => {
    if (strs.length === 0) {
        return ``;
    }

    const initial = strs.shift();

    for (let i = 0; i < initial.length; ++i) {
        for (let j = 0; j < strs.length; ++j) {
            const compare = strs[j];

            if (compare[i] !== initial[i]) {
                return compare.slice(0, i);
            }
        }
    }

    return initial;
};

longestCommonPrefix([`flower`, `flow`, `flight`]); // `fl`
longestCommonPrefix([`a`]); // `a`
longestCommonPrefix([`dog`, `racecar`, `car`]); // ``
longestCommonPrefix([`a`, `a`, `b`]); // ``

// 72ms
// 41.2mb
