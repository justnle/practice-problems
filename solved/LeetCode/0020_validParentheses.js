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
    const split = s.split(``);
    let open = ``;
    let openCount = 0;
    let closeCount = 0;
    const openers = [`(`, `[`, `{`];
    const hash = {
        '{': `}`,
        '[': `]`,
        '(': `)`
    };

    for (const char of split) {
        if (openers.includes(char)) {
            open += char;
            ++openCount;
        } else {
            if (char !== hash[open.charAt(open.length - 1)]) {
                return false;
            } else {
                open = open.slice(0, -1);
                ++closeCount;
            }
        }
    }

    if (openCount > closeCount) {
        return false;
    }
    return true;
};

isValid(`[[[]`); // false

// 80ms, faster than 41.87% of js submissions
// 40.6mb, less than 17.85% of js submissions
