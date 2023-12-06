/*
LeetCode #168

Given an integer columnNumber, return its corresponding column
title as it appears in an Excel sheet.

For example:
A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28
...

Example 1:
Input: columnNumber = 1
Output: `A`

Example 2:
Input: columnNumber = 28
Output: `AB`

Example 3:
Input: columnNumber = 701
Output: `ZY`
*/

const convertToTitle = (columnNumber) => {
    const alphabet = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
    let result = ``;

    while (columnNumber > 0) {
        columnNumber--;
        result = alphabet[columnNumber % 26] + result;
        columnNumber = Math.floor(columnNumber / 26);
    }

    return result;
};

convertToTitle(1); // `A`
convertToTitle(28); // `AB`
convertToTitle(701); // `ZY`
convertToTitle(2147483647); // `FXSHRXW`
