/*
HackerRank

The absolute difference is the positive difference between two
values a and b, is written |a-b| or |b-a| and they are equal.
If a = 3 and b = 2, |3-2| = |2-3| = 1. Given an array of integers,
find the minimum absolute difference between any two elements in
the array.

Example

arr = [-2,2,4]

There are 3 pairs of numbers: [-2,2],[-2,4],[2,4]. The absolute
differences for these pairs are |(-2)-2|=4, |(-2)-4|=6, |2-4|=2.
The minimum absolute difference is 2.
*/

const minimumAbsoluteDifference = (arr) => {
    arr.sort((a, b) => a - b);
    let min = Number.MAX_VALUE;

    for (let i = 0; i < arr.length; ++i) {
        if (arr[i + 1] - arr[i] < min) {
            min = arr[i + 1] - arr[i];
        }
    }
    return min;
};

minimumAbsoluteDifference([3, -7, 0]); // 3
