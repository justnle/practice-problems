/*
LeetCode #118 - Pascal's Triangle - Easy

Given an integer numRows, generate the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers
directly above it.

Example 1:
Input: numRows = 5;
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

Example 2:
Input: numRows = 1;
Output: [[1]]
*/

const generate = (numRows) => {
    // initialize the result array
    const res = [];

    for (let i = 0; i < numRows; ++i) {
        // initialize the current row
        res[i] = [];
        // fill the first element with 1
        res[i][0] = 1;

        // only runs after two rows have been filled
        // fills the rest of the array with the sum
        // of the previous arrays left + right items
        for (let j = 1; j < i; ++j) {
            res[i][j] = res[i - 1][j - 1] + res[i - 1][j];
        }
        // fill the last element with 1
        res[i][i] = 1;
    }
    return res;
};

generate(5); // [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
generate(1); // [[1]]

// 72ms, faster than 62.97% of js submissions
// 42mb, less than 55.64% of js submissions
