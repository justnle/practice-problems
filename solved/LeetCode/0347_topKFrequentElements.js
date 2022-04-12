/*
LeetCode #347 - Top K Frequent Elements - Medium

Given an integer array nums and an integer k, return the top k
most frequent elements. You may return the answer in any order.

Example 1:
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2:
Input: nums = [1], k = 1
Output: [1]
*/

const topKFrequent = (nums, k) => {
    const map = {};
    const res = [];

    for (const num of nums) {
        !map[num] ? (map[num] = 1) : ++map[num];
    }

    const sorted = Object.values(map).sort((a, b) => b - a);
    let compare = sorted[0];

    for (let i = 1; i < sorted.length; ++i) {
        if (compare === sorted[i]) {
            sorted.splice(i, 1);
            --i;
        } else {
            compare = sorted[i];
        }
    }

    for (const freq of sorted) {
        for (const num in map) {
            if (map) {
                if (map[num] === freq) {
                    res.push(num);
                }

                if (res.length === k) {
                    return res;
                }
            }
        }
    }
    return res;
};

topKFrequent([1, 1, 1, 2, 2, 3], 2); // [1, 2]

// 84ms, faster than 82.61% of js submissions
// 45.1mb, less than 70.29% of js submissions
