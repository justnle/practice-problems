/*
LeetCode 69 - Sqrt(x) - Easy

Given a non-negative integer x, compute and return the square of root x.

Since the return type is an integer, the decimal digits are truncated,
and only the integer part of the result is returned.

Note: You are not allowed to use any built-in exponent function or operator,
such as pow(x, 0.5) or x ** 0.5.
*/

const mySqrt = (x) => {
    let start = 0;
    let end = x;
    let res = 0;

    while (start < end) {
        res = Math.ceil((start + end) / 2);

        if (res * res <= x && (res + 1) * (res + 1) > x) {
            return res;
        }

        if (res * res < x) {
            start = res;
        } else {
            end = res;
        }
    }
    return res;
};

mySqrt(4); // 2
mySqrt(8); // 2
