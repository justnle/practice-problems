/*
LeetCode #1323

Given a positive integer num consisting only of digits 6 and 9.

Return the maximum number you can get by changing at most one digit
(6 becomes 9, and 9 becomes 6).
*/

const maximum69Number = (num) => {
    const numArr = num.toString().split(``);
    const first6 = numArr.findIndex((digit) => digit === `6`);

    if (first6 < 0) {
        return num;
    } else {
        numArr[first6] = `9`;
        return parseInt(numArr.join(``));
    }
};
// 56ms and 34mb, 55.93% faster

maximum69Number(9669); // 9969
maximum69Number(9996); // 9999
maximum69Number(9999); // 9999
