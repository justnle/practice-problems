/*
LeetCode #57 - Insert Interval - Medium

You are given an array of non-overlapping intervals intervals where
intervals[i] = [start_i, end_i] represents the start and the end of
the i^th interval and intervals is sorted in ascending order by start_i.
You are also given an interval newInterval = [start, end] that represents
the start and end of another interval.

Insert newInterval into intervals such that intervals is still sorted in
ascending order by start_i and intervals still does not have any overlapping
intervals (merge overlapping intervals if necessary).

Return intervals after the insertion.

Example 1:
Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]

Example 2:
Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
*/

const insert = (intervals, newInterval) => {
    const res = [];

    for (let i = 0; i < intervals.length; ++i) {
        if (newInterval[1] < intervals[i][0]) {
            res.push(newInterval);
            res.push(...intervals);
            return res;
        } else if (newInterval[0] > intervals[i][1]) {
            res.push(intervals[i]);
            console.log(res);
        } else {
            newInterval = [
                Math.min(newInterval[0], intervals[i][0]),
                Math.max(newInterval[1], intervals[i][1])
            ];
        }
        console.log(newInterval);
    }
    res.push(newInterval);
    return res;
};

insert(
    [
        [1, 3],
        [6, 9]
    ],
    [2, 5]
); // [[1,5],[6,9]]

insert(
    [
        [1, 2],
        [3, 5],
        [6, 7],
        [8, 10],
        [12, 16]
    ],
    [4, 8]
); // [[1,2],[3,10],[12,16]]
