/*
LeetCode #1 - Two Sum - Easy

Given an array of integers nums and an integer target, return indices of the two
numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not
use the same element twice.

You can return the answer in any order.

Exanple 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]

Exanple 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Exanple 3:
Input: nums = [3,3], target = 6
Output: [0,1]
*/

const twoSum = (nums, target) => {
    const map = new Map();

    for (let i = 0; i < nums.length; ++i) {
        const remainder = target - nums[i];

        if (map.has(remainder)) {
            return [map.get(remainder), i];
        } else {
            map.set(nums[i], i);
        }
    }
    return [];
};

twoSum([2, 7, 11, 15], 9); // [0, 1]
twoSum([3, 2, 4], 6); // [1, 2]
twoSum([3, 3], 6); // [0, 1]

// 99ms, faster than 62.68% of js submissions
// 43.6mb, less than 20.87% of js submissions
