/*
LeetCode #36 - Valid Sudoku - Medium

Determine if a 9x9 Sudoku board is valid. Only the filled cells need
to be validated according to the following rules:

    1. Each row must contain the digits 1-9 without repetition.
    2. Each column must contain the digits 1-9 without repetition.
    3. Each of the 9 3x3 sub-boxes of the grid must contain the
       digits 1-9 without repetition.

Note:
    - A Sudoku board (partially filled) could be valid but is not
        necessarily solvable.
    - Only the filled cells need to be validated according to the
        mentioned rules.

Example 1:
Input: board =
[[`5`, `3`, `.`, `.`, `7`, `.`, `.`, `.`, `.`],
[`6`, `.`, `.`, `1`, `9`, `5`, `.`, `.`, `.`],
[`.`, `9`, `8`, `.`, `.`, `.`, `.`, `6`, `.`],
[`8`, `.`, `.`, `.`, `6`, `.`, `.`, `.`, `3`],
[`4`, `.`, `.`, `8`, `.`, `3`, `.`, `.`, `1`],
[`7`, `.`, `.`, `.`, `2`, `.`, `.`, `.`, `6`],
[`.`, `6`, `.`, `.`, `.`, `.`, `2`, `8`, `.`],
[`.`, `.`, `.`, `4`, `1`, `9`, `.`, `.`, `5`],
[`.`, `.`, `.`, `.`, `8`, `.`, `.`, `7`, `9`]]
Output: true

Example 2:
Input: board =
[[`8`, `3`, `.`, `.`, `7`, `.`, `.`, `.`, `.`],
[`6`, `.`, `.`, `1`, `9`, `5`, `.`, `.`, `.`],
[`.`, `9`, `8`, `.`, `.`, `.`, `.`, `6`, `.`],
[`8`, `.`, `.`, `.`, `6`, `.`, `.`, `.`, `3`],
[`4`, `.`, `.`, `8`, `.`, `3`, `.`, `.`, `1`],
[`7`, `.`, `.`, `.`, `2`, `.`, `.`, `.`, `6`],
[`.`, `6`, `.`, `.`, `.`, `.`, `2`, `8`, `.`],
[`.`, `.`, `.`, `4`, `1`, `9`, `.`, `.`, `5`],
[`.`, `.`, `.`, `.`, `8`, `.`, `.`, `7`, `9`]]
Output: false
*/

const isValidSudoku = (board) => {
    for (let i = 0; i < 9; ++i) {
        const row = new Set();
        const col = new Set();
        const grid = new Set();

        for (let j = 0; j < 9; ++j) {
            const rowElem = board[i][j];
            const colElem = board[j][i];
            // eslint-disable-next-line operator-linebreak
            const gridElem =
                board[Math.floor(i / 3) * 3 + Math.floor(j / 3)][
                    (i % 3) * 3 + (j % 3)
                ];

            if (row.has(rowElem) || col.has(colElem) || grid.has(gridElem)) {
                return false;
            } else {
                if (rowElem !== `.`) {
                    row.add(rowElem);
                }

                if (colElem !== `.`) {
                    col.add(colElem);
                }

                if (gridElem !== `.`) {
                    grid.add(gridElem);
                }
            }
        }
    }
    return true;
};

isValidSudoku([
    [`5`, `3`, `.`, `.`, `7`, `.`, `.`, `.`, `.`],
    [`6`, `.`, `.`, `1`, `9`, `5`, `.`, `.`, `.`],
    [`.`, `9`, `8`, `.`, `.`, `.`, `.`, `6`, `.`],
    [`8`, `.`, `.`, `.`, `6`, `.`, `.`, `.`, `3`],
    [`4`, `.`, `.`, `8`, `.`, `3`, `.`, `.`, `1`],
    [`7`, `.`, `.`, `.`, `2`, `.`, `.`, `.`, `6`],
    [`.`, `6`, `.`, `.`, `.`, `.`, `2`, `8`, `.`],
    [`.`, `.`, `.`, `4`, `1`, `9`, `.`, `.`, `5`],
    [`.`, `.`, `.`, `.`, `8`, `.`, `.`, `7`, `9`]
]); // true

isValidSudoku([
    [`8`, `3`, `.`, `.`, `7`, `.`, `.`, `.`, `.`],
    [`6`, `.`, `.`, `1`, `9`, `5`, `.`, `.`, `.`],
    [`.`, `9`, `8`, `.`, `.`, `.`, `.`, `6`, `.`],
    [`8`, `.`, `.`, `.`, `6`, `.`, `.`, `.`, `3`],
    [`4`, `.`, `.`, `8`, `.`, `3`, `.`, `.`, `1`],
    [`7`, `.`, `.`, `.`, `2`, `.`, `.`, `.`, `6`],
    [`.`, `6`, `.`, `.`, `.`, `.`, `2`, `8`, `.`],
    [`.`, `.`, `.`, `4`, `1`, `9`, `.`, `.`, `5`],
    [`.`, `.`, `.`, `.`, `8`, `.`, `.`, `7`, `9`]
]); // false

// 80ms, faster than 87.53% of js submissions
// 44.3mb, less than 94.60% of js submissions
