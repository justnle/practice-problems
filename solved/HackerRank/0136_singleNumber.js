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

    const result = Object.keys(hash).find((key) => hash[key] === 1);

    return result;
};

singleNumber([2, 2, 1]); // 1

// 96ms, faster than 45.49% of js submissions
// 44.6mb, less than 19.54% of js submissions
