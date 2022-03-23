/*
LeetCode 219 - Contains Duplicate II (Easy)

Given an integer array nums and an integer k, return true if
there are two distinct indices i and j in the array such that
nums[i] == nums[j] and abs(i -j) <= k.

Example 1:
Input: nums = [1,2,3,1], k = 3
Output: true

Example 2:
Input: nums = [1,0,1,1], k = 1
Output: true

Example 3:
Input: nums = [1,2,3,1,2,3], k = 2
Output: false
*/

const containsNearbyDuplicate = (nums, k) => {
    const dupes = {};
    let res = Number.MAX_VALUE;

    for (const num of nums) {
        !dupes[num] ? (dupes[num] = 1) : ++dupes[num];
    }

    for (const num in dupes) {
        if (dupes[num] <= 1) {
            delete dupes[num];
        } else {
            dupes[num] = [];
        }
    }

    for (const num in dupes) {
        for (let i = 0; i < nums.length; ++i) {
            if (nums[i] === parseInt(num)) {
                dupes[num].push(i);
            }
        }
    }

    const minDiff = (arr, n) => {
        let diff = Number.MAX_VALUE;
        arr.sort((a, b) => a - b);

        for (let i = 0; i < n - 1; ++i) {
            if (arr[i + 1] - arr[i] < diff) {
                diff = arr[i + 1] - arr[i];
            }
        }
        return diff;
    };

    for (const vals in dupes) {
        const check = minDiff(dupes[vals], dupes[vals].length);

        if (check <= k) {
            res = check;
        }
    }

    if (res <= k) {
        return true;
    } else {
        return false;
    }
};

containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2); // false

// 2395ms, faster than 12.23% of js submissions
// 71.8mb, less than 10.07% of js submissions
