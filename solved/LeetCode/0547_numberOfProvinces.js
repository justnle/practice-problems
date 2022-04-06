/*
LeetCode #547 - Number of Provinces - Medium

There are n cities. Some of them are connected, while
some are not. If city a is connected directly to city b,
and city b is connected directly with city c, then city a
is connected indirectly with city c.

A province is a group of directly or indirectly connected
cities and no other cities outside of the group.

You are given an n x n matrix isConnected where isConnected[i][j] = 1
if the i^th city and the j^th city are directly connected, and
isConnected[i][j] = 0 otherwise.

Return the total number of provinces.

Example 1:
Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]
Output: 2

Input: isConnected = [[1,0,0],[0,1,0],[0,0,1]]
Output: 3
*/

const findCircleNum = (isConnected) => {
    // a set to store the visited cities
    const visited = new Set();
    // number of provinces
    let provinces = 0;

    // helper function to do DFS traversal through isConnected
    const dfs = (v) => {
        // traversing through a city's neighbors
        for (let j = 0; j < isConnected.length; ++j) {
            // if this city is connected and not visited
            if (isConnected[v][j] === 1 && !visited.has(j)) {
                visited.add(j);
                dfs(j);
            }
        }
    };

    for (let i = 0; i < isConnected.length; ++i) {
        // check if city has been visited
        if (!visited.has(i)) {
            // dfs for this city
            dfs(i);
            // add a province
            ++provinces;
        }
    }
    return provinces;
};

findCircleNum([
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1]
]); // Output 2
findCircleNum([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
]); // Output 3

// 94ms, faster than 59.94% of js submissions
// 44.9mb, less than 60.99% of js submissions
