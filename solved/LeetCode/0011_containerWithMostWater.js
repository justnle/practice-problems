/*
LeetCode #11 - Container With Most Water - Medium

You are given an integer array height of length n. There are n vertical
lines drawn such that the two endpoints of the i^th line are (i,0) and
(i,height[i]).

Find the two lines that together with the x-axis form a container, such
that the container contains the most water.

Return the maximum amount of water a container can store.

Note: You may not slant the container.

Example 1:
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array
[1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section)
the container can contain is 49.

Example 2:
Input: height = [1,1]
Output: 1
*/

const maxArea = (height) => {
    let res = 0;
    let i = 0;
    let j = height.length - 1;

    while (i < j) {
        res = Math.max(res, Math.min(height[i], height[j]) * (j - i));
        height[i] <= height[j] ? ++i : --j;
    }
    return res;
};

maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]); // 49
maxArea([1, 1]); // 1

// 90ms, faster than 72.28% of js submissions
// 49.9mb, less than 28.61% of js submissions
