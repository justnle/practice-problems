/*
LeetCode #215 Medium

Given an integer array nums and an integer k, return the k^th largest
element in the array.

Note that it is the k^th largest element in the sorted order, not the
k^th distinct element.

Example 1:
Input: nums = [3,2,1,5,6,4], k = 2
Output: 5

Example 2:
Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
Output: 4
*/

const findKthLargest = (nums, k) => {
    nums.sort((a, b) => b - a);
    return nums[k - 1];
};

findKthLargest([3, 2, 1, 5, 6, 4], 2); // 5

// 72ms, faster than 95.13% of js submissions
// 40.1mb, less than 69.47% of js submissions
