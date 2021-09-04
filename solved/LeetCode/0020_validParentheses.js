/*
LeetCode #20

Given a string s containing just the characters `(`, `)`, `{`, `}`, `[` and `]`,
determine if the input string is valid.

An input string is valid if:
    1. Open brackets must be closed by the same type of brackets.
    2. Open brackets must be closed in the correct order.

Example 1:
Input: s = `()`
Output: true

Example 2:
Input: s = `()[]{}`
Output: true

Example 3:
Input: s = `(]`
Output: false

Example 4:
Input: s = `([)]`
Output: false

Example 5:
Input: s = `{[]}
Output: true
*/

const isValid = (s) => {
    const stack = [];
    const hash = {
        '(': `)`,
        '[': `]`,
        '{': `}`
    };

    for (let i = 0; i < s.length; ++i) {
        const char = s[i];

        if (hash[char]) {
            stack.push(hash[char]);
        } else if (char !== stack.pop()) {
            return false;
        }
    }

    return !stack.length;
};

isValid(`[[[]`); // false

// 72ms, faster than 81.91% of js submissions
// 38.8mb, less than 82.70% of js submissions
