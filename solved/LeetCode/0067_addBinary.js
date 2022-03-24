/*
LeetCode 67 - Add Binary - Easy

Given two binary strings a and b, return their sum as a binary string.

Example 1:
Input: a = `11`, b = `1`
Output: `100`

Example 2:
Input: a = `1010`, b = `1011`
Output: `10101`
*/

const addBinary = (a, b) => {
    (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);
};

addBinary(`11`, `1`); // `100`
addBinary(`1010`, `1011`); // `10101`
