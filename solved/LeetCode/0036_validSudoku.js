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
    for (let row = 0; row < board.length; ++row) {
        const rowMap = new Map();
        const colMap = new Map();

        for (let col = 0; col < board.length; ++col) {
            const rowElem = board[row][col];
            const colElem = board[col][row];

            if (rowMap.has(rowElem) || colMap.has(colElem)) {
                return false;
            } else {
                if (rowElem !== `.`) {
                    rowMap.set(rowElem, row);
                }

                if (colElem !== `.`) {
                    colMap.set(colElem, row);
                }
            }
        }
    }

    const gridMap = new Map();
    let gridRow = 3;
    let gridCol = 3;
    let addCol = 0;
    let grid = 1;

    for (let row = 0; row < gridRow; ++row) {
        for (let col = 0 + addCol; col < gridCol; ++col) {
            const gridElem = board[row][col];
            const mapVals = [...gridMap.values()];

            if (gridElem !== `.` && mapVals.includes(gridElem)) {
                return false;
            }

            if (gridMap.has(gridElem) && gridElem !== `.`) {
                return false;
            } else {
                gridMap.set(`row: ${row} col: ${col} grid: ${grid}`, gridElem);
            }

            if (gridMap.size === 9) {
                console.log(gridMap);

                gridMap.clear();
                ++grid;
                // console.log(`reset row`);
                row -= 2;

                if (gridCol < 9) {
                    gridCol += 3;
                }

                if (addCol < 9) {
                    addCol += 3;
                }
            }
        }

        if (
            // eslint-disable-next-line operator-linebreak
            (grid === 4 && gridMap.size === 0) ||
            (grid === 7 && gridMap.size === 0)
        ) {
            gridCol = 3;
            addCol = 0;
            gridRow += 3;
            row += 2;
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

// 237ms, faster than 5.01% of js submissions
// 50.5mb, less than 8.14% of js submissions
