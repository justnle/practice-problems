/*
LeetCode #238 - Product of Array Except Self - Medium

Given an integer array nums, return an array answer such that answer[i]
is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit
integer.

You must write an algorithm that runs in O(n) time and without using
the division operator.

Example 1:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
*/

const productExceptSelf = (nums) => {
    const leftProd = [1];
    const rightProd = [1];
    const res = [];
    const rev = nums.slice(0, nums.length).reverse();

    for (let i = 0; i < nums.length; ++i) {
        leftProd.push(leftProd[i] * nums[i]);
        rightProd.push(rightProd[i] * rev[i]);
    }
    rightProd.reverse();

    for (let j = 1; j <= nums.length; ++j) {
        res.push(leftProd[j - 1] * rightProd[j]);
    }
    return res;
};

productExceptSelf([1, 2, 3, 4]); // [24,12,8,6]
productExceptSelf([-1, 1, 0, -3, 3]); // [0,0,9,0,0]

// 110ms, faster than 82.49% of js submissions
// 59.7mb, less than 5.11% of js submissions
