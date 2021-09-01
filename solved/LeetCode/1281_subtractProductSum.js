/*
LeetCode #1281

Given an integer number n, return the difference between the
product of its digits and the sum of its digits.
*/

const subtractProductAndSum = (n) => {
    const split = [...(n + ``)].map(Number);
    const product = split.reduce((a, b) => a * b);
    const sum = split.reduce((a, b) => a + b);

    return product - sum;
};
// 52ms and 34.1mb

subtractProductAndSum(234); // 15
subtractProductAndSum(4421); // 21

/*
var subtractProductAndSum = function(n) {
    const numStr = n.toString().split('');
    let product = 1;
    let sum = 0;

    for (let i = 0; i < numStr.length; ++i) {
        sum += parseInt(numStr[i]);
        product *= parseInt(numStr[i]);
    }

    return product - sum;
};
*/
