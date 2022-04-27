/*
LeetCode #11 - Container With Most Water - Medium

You are given an integer array height of length n. There are n vertical
lines drawn such that the two endpoints of the i^th line are (i,0) and
(i,height[i]).

Find the two lines that together with the x-axis form a container, such
that the container contains the most water.

Return the maximum amount of water a container can store.

Note: You may not slant the container.
*/

const maxArea = (height) => {
    let area = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        area = Math.max(
            area,
            (right - left) * Math.min(height[left], height[right])
        );

        if (height[left] < height[right]) {
            ++left;
        } else {
            --right;
        }
    }
    return area;
};

maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]); // 49

// 1341 ms, faster than 5.01% of js submissions
// 55.5mb, less than 5.01% of js submissions
// two pointers, O(n) time, O(1) space
