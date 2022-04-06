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
*/

/*
PSEUDOCODE

1. find the length of isConnected to determine max amount of provinces
2. map over the first array
    if index 1 or index 2 === 1, then city a is connected to b and/or c
3. map over the second array
    if index 0 or index 2 === 1, then city b is connected to a and/or c
*/

const findCircleNum = (isConnected) => {
    let maxProv = isConnected.length;

    for (let i = 0; i < isConnected.length; ++i) {
        if (
            JSON.stringify(isConnected[i]) ===
            JSON.stringify(isConnected[i + 1])
        ) {
            --maxProv;
        }
    }

    console.log(maxProv);
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
