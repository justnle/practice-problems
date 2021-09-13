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

const climbStairs = (n) => {
    function memoize(fn) {
        const cache = {};
        return function (...args) {
            if (cache[args]) {
                return cache[args];
            }

            const result = fn.apply(this, args);
            cache[args] = results;

            return result;
        };
    }

    const slowClimb = (n) => {
        if (n < 4) {
            return n;
        }

        return climb(n - 1) + climb(n - 2);
    };

    const climb = memoize(slowClimb);
    return climb(n);
};

climbStairs(9); // 55
