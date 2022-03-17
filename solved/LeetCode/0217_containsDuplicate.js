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
    const map = {};
    let check = true;

    for (const num of nums) {
        !map[num] ? (map[num] = 1) : (check = false);
    }
    // console.log(check);
    return check;
};

containsDuplicate([1, 2, 3, 4, 5]);
containsDuplicate([1, 1, 1, 4, 5]);

// 160ms, faster than 35.50% of js submissions
// 52.1mb, less than 8.69% of js submissions
