/*
LeetCode #509

The Fibonacci numbers, commonly denoted F(n) form a 
sequence, called the Fibonacci sequence, such that each
number is the sum of the two preceding ones, starting
from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1

Given n, calculate F(n).
*/

const fib = (n) => {
    const fibArr = [];

    for (let i = 0; i < n + 1; ++i) {
        if (fibArr.length < 2) {
            fibArr.push(i);
        } else {
            fibArr.push(fibArr[i - 2] + fibArr[i - 1]);
        }
    }
    return fibArr[n];
};

fib(2); // 1
fib(3); // 2
fib(3); // 3
