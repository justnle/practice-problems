/*
LeetCode #128 - Longest Consecutive Sequence - Medium

Given an unsorted array of integers nums, return the length of the longest
consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

Example 1:
Input: nums = [100, 4, 200, 1, 3, 2]
Output: 4

Example 2:
Input: nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]
Output: 9
*/

const longestConsecutive = (nums) => {
    const seq = new Set(nums);
    let longest = 0;

    for (const num of nums) {
        if (!seq.has(num - 1)) {
            let length = 0;

            while (seq.has(num + length)) {
                ++length;
            }
            longest = Math.max(length, longest);
        }
    }
    return longest;
};

longestConsecutive([100, 4, 200, 1, 3, 2]); // 4
longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]); // 9

// 535ms, faster than 34.13% of js submissions
// 50.5mb, less than 61.53% of js submissions
