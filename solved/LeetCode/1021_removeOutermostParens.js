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
    let parens = 0;
    let result = ``;

    for (const paren of s) {
        if (paren === `(`) {
            if (parens > 0) {
                result += paren;
            }
            parens++;
        } else {
            parens--;
            if (parens > 0) {
                result += paren;
            }
        }
    }
    return result;
};

removeOuterParentheses(`(()())(())(()(()))`); // "()()()()(())"

// 136ms, faster than 11% of js submissions
// 43.7mb, less than 81.10% of js submissions
