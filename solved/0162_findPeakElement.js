/*
LeetCode #162

A peak element is an element that is strictly greater than it's neighbors.

Given an integer array nums, find a pea element, and return its index. If
the array contains multiple peaks, return the index to any of the peaks.

You may imagine that nums[-1] = nums[n] = -infinity.

You must write an algorithm that runs in O(log n) time.

Example 1:
Input: nums = [1,2,3,1]
Output: 2

Example 2:
Input: nums = [1,2,1,3,5,6,4]
Output: 5
*/

const findPeakElement = (nums) => {
    return nums.indexOf(Math.max(...nums));
};

findPeakElement([1, 2, 3, 1]); // 2

// similar to LeetCode #852
