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
    let p1 = 0;
    let p2 = numbers.length - 1;
    let sum = numbers[p1] + numbers[p2];

    while (sum !== target) {
        sum < target ? ++p1 : --p2;
        sum = numbers[p1] + numbers[p2];
    }

    return [p1 + 1, p2 + 1];
};

twoSum([2, 7, 11, 15], 9); // [1,2]

// 89ms, faster than 44.82% of js submissions
// 38.8mb, less than 87.07% of js submissions
// two pointer approach
