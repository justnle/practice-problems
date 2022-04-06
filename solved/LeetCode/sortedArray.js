/*
Given a sorted array of distinct integers and a target value,
return the index if the target is found. If not, return the
index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.
*/

/*
PSEUDOCODE

- map over array
- look for target
    - if target is found, return index of target
    - if target is not found, find index where array
      element is less than or equal to target
       return index +1 of that index
-  edge cases
    if target = 0, return 0
*/

const searchInsert = (nums, target) => {
    let found = false;
    let previous;

    if (target === 0) {
        return 0;
    }

    for (const num of nums) {
        if (num === target) {
            found = true;
            return nums.indexOf(num);
        }
    }

    if (found === false) {
        for (const num of nums) {
            if (num <= target) {
                previous = num;
            }
        }
        return nums.indexOf(previous) + 1;
    }
};

searchInsert([1, 3, 5, 6], 5);
searchInsert([1, 3, 5, 6], 2);
searchInsert([1, 3, 5, 6], 7);
searchInsert([1, 3, 5, 6], 0);
searchInsert([1], 0);
