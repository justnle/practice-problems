/*
LeetCode #684 - Redundant Connection - Medium

In this problem, a tree is an undirected graph that is connected and
has no cycles.

You are given a graph that started as a tree with n nodes labeled from 1 to n,
with one additional edge added. The added edge has two different vertices chosen
from 1 to n, and was not an edge that already existed. The graph is represented
as an array edges of length n where edges[i] = [ai, bi] indicates that there is
an edge between nodes ai and bi in the graph.

Return an edge that can be removed so that the resulting graph is a tree of n
nodes. If there are multiple answers, return the answer that occurs last in the
input.

Example 1:
Input: edges = [[1,2],[1,3],[2,3]]
Output: [2,3]

Example 2:
Input: edges = [[1,2],[2,3],[3,4],[1,4],[1,5]]
Output: [1,4]
*/

class Finder {
    constructor(n) {
        this.parent = Array(n).fill(0);
        this.child = Array(n).fill(1);

        for (let i = 0; i <= n; ++i) {
            this.parent[i] = i;
        }
    }

    find(x) {
        if (x === this.parent[x]) {
            return x;
        } else {
            return (this.parent[x] = this.find(this.parent[x]));
        }
    }

    union(x, y) {
        let x1 = this.find(x);
        let y1 = this.find(y);

        if (x1 === y1) {
            return false;
        }

        if (this.child[x1] > this.child[y1]) {
            this.parent[y1] = x1;
            this.child[x1] += this.child[y1];
        } else {
            this.parent[x1] = y1;
            this.child[y1] += this.child[x1];
        }

        return true;
    }
}

const removeEdge = (edges) => {
    const finder = new Finder(edges.length);

    for (const edge of edges) {
        if (!finder.union(edge[0], edge[1])) {
            return edge;
        }
    }

    return edges[edges.length - 1];
};

removeEdge([
    [1, 2],
    [1, 3],
    [2, 3]
]);
removeEdge([
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 4],
    [1, 5]
]);
