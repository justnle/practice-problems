/*
LeetCode #167 Two Sum II - Input Array is Sorted

Given an array of integers numbers that is already sorted in non-descending
order, find the two numbers such that they add up to a specific target number.

Return the indices of the two (1-indexed) as an integer array answer of size 2,
where 1 <= answer[0] < answer[1] <= numbers.length.

The tests are generated such that there is exactly one solution.
You may not use the same element twice.

Example 1:
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]

Example 2:
Input: numbers = [2,3,4], target = 6
Output: [1,3]

Example 3:
Input: numbers = [-1,0], target = -1
Output: [1,2]
*/

const twoSum = (numbers, target) => {
    const map = new Map();

    for (let i = 0; i < numbers.length; ++i) {
        if (map.has(target - numbers[i])) {
            return [map.get(target - numbers[i]), i + 1];
        } else {
            map.set(numbers[i], i + 1);
        }
    }
};

twoSum([2, 7, 11, 15], 9); // [1,2]

// 362ms, faster than 5.30% of js submissions
// 52mb, less than 5.05% of js submissions
