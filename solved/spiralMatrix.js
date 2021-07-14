/*
LeetCode #54 Spiral Matrix

Given an m x n matrix, return all elements of the
matrix in spiral order.
*/

const spiralOrder = (matrix) => {
    const results = [];
    let startCol = 0;
    let endCol = matrix[0].length - 1;
    let startRow = 0;
    let endRow = matrix.length - 1;
    const totalElems = matrix[0].length * matrix.length;

    while (startCol <= endCol && startRow <= endRow) {
        // top row
        for (let i = startCol; i <= endCol; ++i) {
            if (results.length < totalElems) {
                results.push(matrix[startRow][i]);
            }
        }
        ++startRow;

        // right col
        for (let i = startRow; i <= endRow; ++i) {
            if (results.length < totalElems) {
                results.push(matrix[i][endCol]);
            }
        }
        --endCol;

        // bottom row
        for (let i = endCol; i >= startCol; --i) {
            if (results.length < totalElems) {
                results.push(matrix[endRow][i]);
            }
        }
        --endRow;

        // left col
        for (let i = endRow; i >= startRow; --i) {
            if (results.length < totalElems) {
                results.push(matrix[i][startCol]);
            }
        }
        ++startCol;
    }
    console.log(results);
    return results;
};

spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]);

spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
]);
