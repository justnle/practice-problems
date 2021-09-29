const merge = (nums1, m, nums2, n) => {
    let idx1 = m - 1;
    let idx2 = n - 1;
    let idx3 = m + n - 1;

    while (idx2 >= 0) {
        nums1[idx3--] =
            nums1[idx1] > nums2[idx2] ? nums1[idx1--] : nums2[idx2--];
    }
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3); // [1,2,2,3,5,6];

// 72ms, faster than 79.75% of js submissions
// 38.9mb, less than 58.04% of js submissions
