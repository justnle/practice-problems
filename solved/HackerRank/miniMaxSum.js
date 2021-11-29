/*
HackerRank Mini-Max Sum

Given five positive integers, find the minimum and maximum values
that can be calculated by summing exactly four of the five integers.
Then print the respective minimum and maximum values as a single line
of two space-separated long integers.

Example:
arr = [1,3,5,7,9]

The minimum sum is 1+3+5+7=16 and the maximum sum is 3+5+7+9=24.
The function prints: 16 24
*/

const miniMaxSum = (arr) => {
    arr.sort();
    const small = arr.slice(0, 4);
    const large = arr.slice(1, 5);
    const reducer = (a, b) => a + b;

    console.log(`${small.reduce(reducer)} ${large.reduce(reducer)}`);
};

miniMaxSum([7, 69, 2, 221, 8974]); // 299 9271
