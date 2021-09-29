/*
LeetCode #88 Easy

You are given two integer arrays nums1 and nums2, sorted in non-decreasing
order, and two inteers m and n, representing the number of elements in nums1
and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be
stored inside the array nums1. To accomodate this, nums1 has a length of m + n,
where the first m elements denote the elements that should be merged, and the
last n elements are set to 0 and should be ignored. nums2 has a length of n.

Example 1:
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]

Example 2:
Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]

Example 3:
Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
*/

const merge = (nums1, m, nums2, n) => {
    let idx1 = m - 1;
    let idx2 = n - 1;
    let idx3 = m + n - 1;

    while (idx2 >= 0) {
        // eslint-disable-next-line operator-linebreak
        nums1[idx3--] =
            nums1[idx1] > nums2[idx2] ? nums1[idx1--] : nums2[idx2--];
    }
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3); // [1,2,2,3,5,6];

// 72ms, faster than 79.75% of js submissions
// 38.9mb, less than 58.04% of js submissions
