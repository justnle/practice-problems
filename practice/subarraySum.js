/*
LeetCode #560

Given an array  of integers nums and an integer k, return the
total number of continuous subarrays whose sum equals to k.

Example 1:
Input: nums = [1,1,1], k = 2
Output: 2

Example 2:
Input: nums = [1,2,3], k = 3
Output: 2
*/

const subarraySum = (nums, k) => {
    const hash = {
        0: 1
    };

    let sum = 0;
    let count = 0;

    for (const num of nums) {
        sum += num;

        if (hash[sum - k]) {
            count += hash[sum - k];
        }

        hash[sum] = (hash[sum] || 0) + 1;
    }
    console.log(count);
    return count;
};

subarraySum([1, 2, 3], 3); // 2
