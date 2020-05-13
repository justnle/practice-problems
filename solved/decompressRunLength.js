/*
LeetCode #1313

We are given a list nums of integers representing a list compressed with
un-length encoding.

Consider each adjacent pair of elements [freq, val] = [nums[2*i], 
nums[2*i+1]] (with i >= 0).  For each such pair, there are freq elements with
value val concatenated in a sublist. Concatenate all the sublists from left to
right to generate the decompressed list.

Return the decompressed list.
*/

const decompressRLElist = (nums) => {
    const answer = [];

    for (let i = 1; i < nums.length; i += 2) {
        for (let j = 0; j < nums[i - 1]; j++) {
            answer.push(nums[i]);
        }
    }
    return answer;
};
// 84ms and 36.9mb

decompressRLElist([1, 2, 3, 4]); // [2,4,4,4]
decompressRLElist([1, 1, 2, 3]); // [1,3,3]
