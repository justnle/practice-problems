/*
LeetCode #1351

Given a m * n matrix grid which is sorted in non-increasing order
both row-wise and column-wise.

Return the number of negative numbers in grid.
*/

const countNegatives = (grid) => {
    let count = 0;
    for (const arr of grid) {
        for (const num of arr) {
            if (num < 0) {
                ++count;
            }
        }
    }
    return count;
};
// 56ms and 37.1mb, 76.13% faster

countNegatives([
    [4, 3, 2, -1],
    [3, 2, 1, -1],
    [1, 1, -1, -2],
    [-1, -1, -2, -3]
]); // 8

countNegatives([
    [3, 2],
    [1, 0]
]); // 0

countNegatives([
    [1, -1],
    [-1, -1]
]); // 3

countNegatives([[-1]]); // 1
