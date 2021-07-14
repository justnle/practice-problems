/*
LeetCode #938
Given the root node of a binary search tree, return the sum of
values of all nodes with value between L and R (inclusive).

The binary search tree is guaranteed to have unique values.
*/

const rangeSumBST = (root, L, R) => {
    let answer = 0;

    const dfs = (node) => {
        if (!node) {
            return;
        }

        if (node.val >= L && node.val <= R) {
            answer += node.val;
        }

        if (L < node.val) {
            dfs(node.left);
        }

        if (R > node.val) {
            dfs(node.right);
        }
    };
    dfs(root);
    return answer;
};
// 164ms and 71mb, 68.50% faster

rangeSumBST([10, 5, 15, 3, 7, null, 18], 7, 15); // 32
rangeSumBST([10, 5, 15, 3, 7, 13, 18, 1, null, 6], 6, 10); // 23
