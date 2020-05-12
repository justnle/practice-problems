/*
LeetCode #1431
Given the array candies and the integer extraCandies, where candies[i]
represents the number of candies that the ith kid has.
For each kid check if there is a way to distribute extraCandies
among the kids such that he or she can have the greatest number of candies
among them. Notice that multiple kids can have the greatest number of candies.
*/

'use strict';

// const kidsWithCandies = (candies, extraCandies) => {
//     let largestNum = 0;
//     const answer = [];

//     for (let i = 0; i < candies.length; ++i) {
//         if (candies[i] > largestNum) {
//             largestNum = candies[i];
//         }
//     }

//     for (const count of candies) {
//         if (count + extraCandies >= largestNum) {
//             answer.push(true);
//         } else {
//             answer.push(false);
//         }
//     }
//     return answer;
// };
// 84 ms and 35.3mb

// const kidsWithCandies = (candies, extraCandies) => {
//     let largestNum = 0;
//     const answer = [];

//     for (const number of candies) {
//         number > largestNum ? (largestNum = number) : largestNum;
//     }

//     for (const count of candies) {
//         count + extraCandies >= largestNum
//             ? answer.push(true)
//             : answer.push(false);
//     }
//     return answer;
// };
// 56ms and 35.5mb

const kidsWithCandies = (candies, extraCandies) => {
    const largest = Math.max(...candies);
    return candies.map((num) => num + extraCandies >= largest);
};

kidsWithCandies([2, 3, 5, 1, 3], 3);
kidsWithCandies([4, 2, 1, 1, 2], 1);
kidsWithCandies([12, 1, 12], 10);
