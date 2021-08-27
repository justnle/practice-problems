/*
LeetCode #1743

There is an integer array nums that consists of n unique elements, but you
have forgotten it. However, you do remember every pair of adjacent elements
in nums.

You are given a 2D integer array adjacentPairs of size n - 1 where each
adjacentPairs[i] = [u_i, v_i] indicates that the elements u_i and v_i are
adjacent in nums.

It is guaranteed that every adjacent pair of elements nums[i] and nums[i+1]
will exist in adjacentPairs, either as [nums[i], nums[i+1]] or
[nums[i+1], nums[i]]. The pairs can appear in any order.

Return the original array nums. If there are multiple solutions, return any
of them.

Example 1:
Input: adjacentPairs = [[2,1], [3,4], [3,2]]
Output: [1,2,3,4]
*/

const restoreArray = (adjacentPairs) => {
    const hash = {};
    const edges = [];
    const visited = [];
    const result = [];

    // create hashmap of all values in adjacentPairs
    // the value(s) are the adjacent elements to the key
    for (const pair of adjacentPairs) {
        if (!hash[pair[0]]) {
            hash[pair[0]] = [pair[1]];
        } else {
            hash[pair[0]].push([pair[1]]);
        }

        if (!hash[pair[1]]) {
            hash[pair[1]] = [pair[0]];
        } else {
            hash[pair[1]].push([pair[0]]);
        }
    }

    // looking through our hash with value.length 1
    // which would mean it is an edge element
    for (const key in hash) {
        if (hash[key].length === 1) {
            edges.push(key);
        }
    }

    // depth first search function
    const dfs = (adjacentMatrix, current, end, res) => {
        if (current === end) {
            return res.push(current);
        }

        if (current in visited) {
            return;
        }

        res.push(current - `0`);
        visited[current] = true;

        for (const neighbor of adjacentMatrix[current]) {
            dfs(adjacentMatrix, neighbor, end, res);
        }
    };

    dfs(hash, edges[0], edges[1], result);

    return result;
};

// restoreArray([
//     [2, 1],
//     [3, 4],
//     [3, 2]
// ]);
// [4,3,2,1] or [1,2,3,4]

restoreArray([
    [-3, -9],
    [-5, 3],
    [2, -9],
    [6, -3],
    [6, 1],
    [5, 3],
    [8, 5],
    [-5, 1],
    [7, 2]
]);
// [7,2,-9,-3,6,1,-5,3,5,8]
