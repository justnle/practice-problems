/*
HackerRank Find the Median

The median of a list of numbers is essentially its middle element after sorting.
The same number of elements occur after it as before. Given a list of numbers
with an odd number of elements, find the median.

Example:
arr = [5,3,1,2,4]

The sorted array arr' = [1,2,3,4,5]. The middle element and the median is 3.
*/

const findMedian = (arr) => {
    const sorted = arr.sort((a, b) => a - b);
    const mid = Math.floor(arr.length / 2);
    return sorted[mid];
};

findMedian([0, 1, 2, 4, 6, 5, 3]); // 3
