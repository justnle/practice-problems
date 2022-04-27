/*
LeetCode #15 - Three Sum - Medium

Given an integer array nums, return all the triplets
[nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k,
and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Example 1:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]

Example 2:
Input: nums = []
Output: []

Example 3:
Input: nums = [0]
Output: []
*/

const threeSum = (nums) => {
    const res = [];
    nums.sort((a, b) => a - b);

    // two pointer method, p1 left, p2 right (low, high)
    for (let i = 0; i < nums.length; ++i) {
        let p1 = i + 1;
        let p2 = nums.length - 1;

        // if nums[i] is the same as the previous one, skip
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        while (p1 < p2) {
            const sum = nums[i] + nums[p1] + nums[p2];

            // if sum is > 0, move p2 to the left because
            // we want a smaller sum. p2-1 < p2 < p2+1

            // if sum < 0, move p1 to the right because
            // we want a larger sum. p1-1 < p1 < p1+1

            // else push the result, increment p1 to
            // find the next group starting with a new nums[i]
            if (sum > 0) {
                p2 -= 1;
            } else if (sum < 0) {
                p1 += 1;
            } else {
                res.push([nums[i], nums[p1], nums[p2]]);
                p1 += 1;

                while (nums[p1] === nums[p1 - 1] && p1 < p2) {
                    p1 += 1;
                }
            }
        }
    }
    return res;
};

// threeSum([-1, 0, 1, 2, -1, -4]); // [[-1, -1, 2], [-1, 0, 1]]
// threeSum([0, 0, 0, 0]); // [[0,0,0]]
// threeSum([0]); // []
threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]);
// [
//  [-4,0,4],[-4,1,3],[-3,-1,4],[-3,0,3],[-3,1,2],
//  [-2,-1,3],[-2,0,2],[-1,-1,2],[-1,0,1]
// ]
