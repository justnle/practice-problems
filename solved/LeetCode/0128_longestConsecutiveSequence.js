/*
LeetCode #128 - Longest Consecutive Sequence - Medium

Given an unsorted array of integers nums, return the length of the longest
consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

Example 1:
Input: nums = [100, 4, 200, 1, 3, 2]
Output: 4

Example 2:
Input: nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]
Output: 9
*/

const longestConsecutive = (nums) => {
    let length = 0;

    for (const num of nums) {
        if (!nums.includes(num - 1)) {
            const set = new Set();
            let next = num + 1;

            set.add(num);

            while (nums.includes(next)) {
                set.add(next);
                next++;
            }

            if (set.size > length) {
                length = set.size;
            }
        }
    }
    return length;
};

longestConsecutive([100, 4, 200, 1, 3, 2]); // 4
longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]); // 9

// TLE
