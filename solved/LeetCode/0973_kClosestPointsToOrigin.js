/*
LeetCode #973 Medium

Given an array of points where points[i] = [xi, yi] represents a point
on the X-Y plane and an integer k, return the k closet points to the origin
(0,0).

The distance betweent wo points on the X-Y plane is the Euclidean distance.

You may return the answer in any order. The answer is guaranteed to be unique
(except for the order that it is in).

Example 1:
Input: points = [[1,3], [-2,2]], k = 1
Output: [[-2,2]]
Explanation:
The distance between (1,3) and the origin is sqrt(10)
The distance between (-2,2) and the origin is sqrt(8)
Since sqrt(8) < sqrt(10), (-2,2) is closer to the origin.
We only want the closest k = 1 points from the origin, so the answer is
[[-2,2]].

Example 2:
Input: points = [[3,3],[5,-1],[-2,4]], k = 2
Output: [[3,3],[-2,4]]
*/

const kClosest = (points, k) => {
    const distances = [];
    const results = [];

    for (const point of points) {
        distances.push([
            Math.sqrt(Math.pow(point[0] - 0, 2) - Math.pow(point[1] - 0, 2)),
            point
        ]);
    }

    distances.sort((a, b) => a[0] - b[0]);

    for (let i = 0; i < k; ++i) {
        results.push(distances[i][1]);
    }

    return results;
};

kClosest(
    [
        [6, 10],
        [-3, 3],
        [-2, 5],
        [0, 2]
    ],
    3
); // [[0,2],[-3,3],[-2,5]]

// 204ms, faster than 58.50% of js submissions
// 54.3mb, less than 44.42% of js submissions
