/*
HackerRank `Diagonal Difference`

Given a square matrix, calculate the absolute difference between the sum
of its diagonals.

For example the square matrix arr shown below:

1 2 3
4 5 6
7 8 9

The left to right diagonal = 1 + 5 + 9 = 15.
The right to left diagonal = 3 + 5 + 7 = 17.
Their absolute difference is |15 - 17| = 2.
*/

const diagonalDifference = (arr) => {
    const size = arr.length;
    let first = 0;
    let second = 0;

    for (let i = 0; i < size; ++i) {
        first += arr[i][i];
        second += arr[i][size - 1 - i];
    }

    return Math.abs(first - second);
};

diagonalDifference([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]); // 2
