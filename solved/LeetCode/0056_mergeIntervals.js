/*
LeetCode # 56 - Merge Intervals - Medium

Given an array of intervals where intervals[i] = [start_i, end_i],
merge all overlapping intervals, and return an array of the non-overlapping
intervals that cover all the intervals in the input.

Example 1:
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into
[1,6].

Example 2:
Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
*/

const merge = (intervals) => {
    intervals.sort((a, b) => a[0] - b[0]);
    // initialize the result array with the first interval
    const res = [intervals[0]];

    for (let i = 1; i < intervals.length; ++i) {
        // get the end of the last interval in res[]
        const lastIntEnd = res[res.length - 1][1];

        if (intervals[i][0] <= lastIntEnd) {
            // if current interval starts before or at the end of the last
            // interval merge the intervals by updating the end time
            res[res.length - 1][1] = Math.max(lastIntEnd, intervals[i][1]);
        } else {
            // else push the current interval to the result array
            res.push(intervals[i]);
        }
    }
    return res;
};

merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18]
]); // [[1,6],[8,10],[15,18]]

// 92ms, faster than 96.52% of js submissions
// 48.6mb, less than 79.86% of js submissions
