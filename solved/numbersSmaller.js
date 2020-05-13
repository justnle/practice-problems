'use strict';
/*
LeetCode #1365

Given the array nums, for each nums[i] find out how many numbers
in the array are smaller than it. That is, for each nums[i] you have
to count the number of valid j's such that j != i and nums[j] < nums[i].

Return the answer in an array.
*/

const smallerNumbersThanCurrent = (nums) => {
    let count = 0;
    const answer = [];

    for (const number of nums) {
        for (let i = 0; i < nums.length; ++i) {
            if (nums[i] !== number) {
                if (nums[i] < number) {
                    count++;
                }
            }
        }
        answer.push(count);
        count = 0;
    }
    return answer;
};
// 64ms and 35.5mb

smallerNumbersThanCurrent([8, 1, 2, 2, 3]); // [4,0,1,1,3]
smallerNumbersThanCurrent([6, 5, 4, 8]); // [2,1,0,3]
smallerNumbersThanCurrent([7, 7, 7, 7]); // [0,0,0,0]
