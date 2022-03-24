/*
LeetCode 217 - Contains Duplicate (Easy)

Given an integer array nums, return true if any value
appears at least twice in the array, and return false
if every element is distinct.

Example 1:
Input: nums = [1,2,3,1]
Output: true

Example 2:
Input: nums = [1,2,3,4]
Output: false

Example 3:
nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
*/

const containsDuplicate = (nums) => {
    const seen = new Map();

    for (let i = 0; i < nums.length; ++i) {
        if (seen.has(nums[i])) {
            return true;
        }
        seen.set(nums[i]);
    }

    return false;
};

containsDuplicate([1, 2, 3, 4, 5]);
containsDuplicate([1, 1, 1, 4, 5]);

// 76ms, faster than 98.15% of js submissions
// 51.2mb, less than 34.10% of js submissions
