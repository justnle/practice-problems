/*
 LeetCode #1295

 Given an array nums of integers, return how many
 of them contain an even number of digits.
 */

const findNumbers = (nums) => {
    let answer = 0;
    for (const len of nums) {
        const test = len.toString().split(``);

        if (test.length % 2 === 0) {
            ++answer;
        }
    }
    return answer;
};
// 48ms and 37.6mb

findNumbers([12, 345, 2, 6, 7896]); // 2
// findNumbers([555, 901, 482, 1771]); // 1
