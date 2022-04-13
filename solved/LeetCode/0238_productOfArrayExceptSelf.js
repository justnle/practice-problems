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
    const answer = [];

    for (let i = 0; i < nums.length; ++i) {
        const rest = nums.slice(1);

        if (i === 0) {
            answer.push(rest.reduce((a, b) => a * b));
        } else {
            const first = nums.slice(0, i);
            const combine = [];
            const second = nums.slice(i + 1);

            combine.push(...first);
            combine.push(...second);
            answer.push(combine.reduce((a, b) => a * b));
        }
    }
    return answer;
};

productExceptSelf([1, 2, 3, 4]); // [24,12,8,6]
productExceptSelf([-1, 1, 0, -3, 3]); // [0,0,9,0,0]

// TLE, solved but not O(n)
