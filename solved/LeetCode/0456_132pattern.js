/*
LeetCode #456 - 132 Pattern - Medium

Given an array of n integers nums, a 132 pattern is a subsequence
of three integers nums[i], nums[j] and nums[k] such that i < j < k
and nums[i] < nums[k] < nums[j].

Return true if there is a 132 pattern in nums, otherwise, return false.

Example 1:
Input: nums = [1,2,3,4]
Output: false
Explanation: There is no 132 pattern in the array.

Example 2:
Input: nums = [3,1,4,2]
Output: true

Example 3:
Input: nums = [-1,3,2,0]
Output: true
*/

const find132pattern = (nums) => {
    const stack = [];
    let min = -Infinity;

    for (let i = nums.length - 1; i >= 0; --i) {
        if (nums[i] < min) {
            return true;
        }

        while (stack.length > 0 && nums[i] > stack[stack.length - 1]) {
            min = stack.pop();
        }
        stack.push(nums[i]);
    }
    return false;
};

find132pattern([1, 2, 3, 4]); // false
