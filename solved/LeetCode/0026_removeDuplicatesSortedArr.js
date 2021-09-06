/*
LeetCode #26

Given an integer array nums sorted in non-decreasing order, remove the
duplicates in-place such that each unique element appears only once.
The relative order of the elements shoudl be kept the same.

Since it is impossible to change the length of the array in some languages,
you must instead have the result be placed int he first part of the array
nums. More formally, if there are k elements after removing the duplicates,
then the first k elements of nums should hold the final result. It does not
matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You  must do this by modifying
the input array in-place with O(1) extra memory.

Custom Judge:
The judge will test your solution with the following code:
int[] nums = [...]; // input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; ++i) {
    assert nums[i] == expectedNums[i];
}

If all assertions pass, then your solution will be accepted.

Example 1:
Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]

Example 2:
Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
*/

const removeDuplicates = (nums) => {
    const hash = {};
    let dupeCount = 0;

    for (const num of nums) {
        !hash[num] ? (hash[num] = 1) : ++hash[num];
    }

    for (const key in hash) {
        if (hash[key] > 1) {
            dupeCount = hash[key] - 1;
            const index = nums.indexOf(parseInt(key));
            nums.splice(index + 1, dupeCount);
        }
    }
    console.log(nums);
};

removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]); // [0,1,2,3,4]

// 136ms, faster than 34.02% of js submissions
// 44.8mb, less than 5.27% of js submissions
