/*
LeetCode #48

You are given an n x n 2D matrix representing an image,
rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you
have to modify the input 2D matrix directly. DO NOT
allocate another 2D matrix and do the rotation.

Example 1
Input:
[[1,2,3],
 [4,5,6],
 [7,8,9]]

Output:
[[7,4,1],
 [8,5,2],
 [9,6,3]]
*/

const rotate = (matrix) => {
    for (let row = 0; row < matrix.length; ++row) {
        for (let col = row; col < matrix[0].length; ++col) {
            [matrix[row][col], matrix[col][row]] = [
                matrix[col][row],
                matrix[row][col]
            ];
        }
    }

    for (const row of matrix) {
        row.reverse();
    }
};

rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]);

// [[7,4,1],[8,5,2],[9,6,3]]
// 72ms, 39.9mb - 75.11% faster
