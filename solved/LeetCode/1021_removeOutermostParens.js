/*
LeetCode #1021 - Remove Outermost Parentheses - Easy

A valid parentheses string is either empty (""), "(" + A + ")", or A + B,
where A and B are valid parentheses strings, and + represents string
concatenation. For example,
"", "()", "(())()", and "(()(()))" are all valid parentheses strings.

A valid parentheses string S is primitive if it is nonempty, and there does not
exist a way to split it into S = A+B, with A and B nonempty valid
parentheses strings.

Given a valid parentheses string S, consider its primitive decomposition:
S = P_1 + P_2 + ... + P_k, where P_i are primitive valid parentheses strings.

Return S after removing the outermost parentheses of every primitive string
in the primitive decomposition of S.

Example 1:
Input: s = "(()())(())"
Output: "()()()"

Example 2:
s = "(()())(())(()(()))";
Output: "()()()()(())"

Example 3:
s = "()()";
Output: ""
*/

const removeOuterParentheses = (s) => {
    let substr = ``;
    let open = 0;
    let start = 0;

    for (let i = 0; i < s.length; ++i) {
        s[i] === `(` ? ++open : --open;

        if (open === 0) {
            substr += s.slice(start + 1, i);
            start = i + 1;
        }
    }
    return substr;
};

removeOuterParentheses(`(()())(())(()(()))`); // "()()()()(())"

// 83ms, faster than 68.15% of js submissions
// 42.4mb, less than 96.92% of js submissions
