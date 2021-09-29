/*
LeetCode #692 Medium

Given an array of strings words and an integer k, return the k
most frequent strings.

Return the answer sorted by the frequency from highest to lowest.
Sort the words with the same frequency by their lexicographical order.

Example 1:
Input: words = [`i`, `love`, `leetcode`, `i`, `love`, `coding`], k = 2
Output: [`i`, `love`]

Example 2:
Input:
words = [`the`, `day`, `is`, `sunny`, `the`, `the`, `the`, `sunny`, `is`, `is`]
k = 2
Output: [`the`, `is`, `sunny`, `day`]
*/

const topKFrequent = (words, k) => {
    words.sort();
    const hash = {};
    const result = [];

    for (const word of words) {
        !hash[word] ? (hash[word] = 1) : ++hash[word];
    }

    while (k > 0) {
        const freq = Object.values(hash);
        const max = Math.max(...freq);

        for (const word in hash) {
            if (k !== 0) {
                if (hash[word] === max) {
                    result.push(word);
                    --k;
                    delete hash[word];
                }
            }
        }
    }
    return result;
};

topKFrequent([`i`, `love`, `leetcode`, `i`, `love`, `coding`], 2);
// [`i`, `love`]
topKFrequent([`i`, `love`, `leetcode`, `i`, `love`, `coding`], 1);
// [`i`]

// 88ms, faster than 76.78% of js submissions
// 41.5mb, less than 79.46% of js submissions
