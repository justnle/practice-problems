/*
LeetCode #136
Given a non-empty array of integers nums, every element appears twice
except for one. Find that single one.

You must implement a solution with linear runtime complexity and use
only constant extra space.

Example 1:
Input: nums = [2,2,1]
Output: 1

Example 2:
Input: nums = [4,1,2,1,2]
Output: 4

Example 3:
Input: nums = [1]
Output: 1
*/

const singleNumber = (nums) => {
    const hash = {};

    for (const num of nums) {
        !hash[num] ? (hash[num] = 1) : ++hash[num];
    }

    for (const num in hash) {
        if (hash[num] === 1) {
            return num;
        }
    }
};

singleNumber([2, 2, 1]); // 1

// 128ms, faster than 25.42% of js submissions
// 45mb, less than 14.57% of js submissions
