/*
LeetCode #35 - Search Insert Position - Easy

Given a sorted array of distinct integers and a target value,
return the index if the target is found. If not, return the
index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [1,3,5,6], target = 5
Output: 2

Example 2:
Input: nums = [1,3,5,6], target = 2
Output: 1

Example 3:
Input: nums = [1,3,5,6], target = 7
Output: 4
*/

const searchInsert = (nums, target) => {
    let min = 0;
    let max = nums.length;

    while (min < max) {
        const mid = min + Math.floor((max - min) / 2);

        if (target > nums[mid]) {
            min = mid + 1;
        } else {
            max = mid;
        }
    }
    return min;
};

searchInsert([1, 3, 5, 6], 5);
searchInsert([1, 3, 5, 6], 2);
searchInsert([1, 3, 5, 6], 7);
searchInsert([1, 3, 5, 6], 0);
searchInsert([1], 0);
