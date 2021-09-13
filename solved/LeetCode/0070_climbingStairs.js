/*
LeetCode #70

You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways
can you climb to the top?

Example 1:
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
    1. 1 step + 1 step
    2. 2 steps

Example 2:
Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
    1. 1 step + 1 step + 1 step
    2. 2 steps + 1 step
    3. 1 step + 2 steps
*/

const hashMap = {};

const climbStairs = (n) => {
    if (n < 4) {
        return n;
    }

    if (hashMap[n]) {
        return hashMap[n];
    }

    const first = climbStairs(n - 1);
    const second = climbStairs(n - 2);

    hashMap[n] = first + second;

    return first + second;
};

climbStairs(9); // 55

// 81ms, faster than 23.94% of js submissions
// 38.7mb, less than 46.82% of js submissions
