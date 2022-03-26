/*
LeetCode 1029 - Two City Scheduling - Medium

A company is planning to interview 2n people. Given the array costs where
costs[i] = [aCost_i, bCost_i], the cost of flying the i^th person to city
a is aCost_i, and the cost of flying the i^th person to city b is bCost_i.

Return the minimum cost to fly every person to a city such that exactly
n people arrive in each city.

Example 1:
Input: costs = [[10,20],[30,200],[400,50],[30,20]];
Explanation:
The first person goes to city A for a cost of 10.
The second person goes to city A for a cost of 30.
The third person goes to city B for a cost of 50.
The fourth person goes to city B for a cost of 20.

The total minimum cost is 10 + 30 + 50 + 20 = 110 to have half the people
interviewing in each city.

Example 2:
Input: costs = [[259,770],[448,54],[926,667],[184,139],[840,118],[577,469]]
Output: 1859

Example 3:
Input: costs = [[515,563],[451,713],[537,709],[343,819],[855,779],[457,60],[650,359],[631,42]]
Output: 3086
*/

const twoCitySchedCost = (costs) => {
    const diffMap = new Map();
    const candidates = costs.length / 2;
    let index = 0;
    let candidate1 = 0;
    let candidate2 = 0;
    let res = 0;

    const diff = (arr) => Math.abs(arr[0] - arr[1]);

    for (const pair of costs) {
        diffMap.set(index, diff(pair));
        ++index;
    }

    const diffArr = [...diffMap].sort(([k1, v1], [k2, v2]) => v2 - v1);

    for (let i = 0; i < diffArr.length; ++i) {
        let costIndex = diffArr[i][0];
        const c1 = costs[costIndex][0];
        const c2 = costs[costIndex][1];

        if (c1 < c2) {
            if (candidate1 < candidates) {
                res += c1;
                ++candidate1;
            } else {
                res += c2;
                ++candidate2;
            }
        }

        if (c2 < c1) {
            if (candidate2 < candidates) {
                res += c2;
                ++candidate2;
            } else {
                res += c1;
                ++candidate2;
            }
        }

        if (c1 == c2) {
            res += c1;
            ++candidate1;
        }
    }

    return res;
};

twoCitySchedCost([
    [515, 563],
    [451, 713],
    [537, 709],
    [343, 819],
    [855, 779],
    [457, 60],
    [650, 359],
    [631, 42]
]); // 3086

// 85ms, faster than 59.11% of js submissions
// 43.6mb, less than 27.59% of js submissions
