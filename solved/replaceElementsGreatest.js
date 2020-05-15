/*
LeetCode #1299

Given an array arr, replace every element in that array with the greatest
element among the elements to its right, and replace the last element
with -1.

After doing so, return the array.
*/
// const replaceElements = (arr) => {
//     const answer = [];
//     const len = arr.length - 1;

//     for (let i = 0; i < len; ++i) {
//         arr.shift();
//         answer.push(Math.max(...arr));
//     }
//     answer.push(-1);
//     return answer;
// };
// 460ms and 38.8mb, 23.81% faster

const replaceElements = (arr) => {
    const answer = [];
    const revArr = [];

    for (let i = arr.length - 1; i >= 0; --i) {
        revArr.push(arr[i]);
    }

    for (let i = 0; i < arr.length - 1; ++i) {
        revArr.pop();
        answer.push(Math.max(...revArr));
    }
    answer.push(-1);
    return answer;
};
// 448ms and 40.2mb, 24.27% faster

/*
pseudocode
start at element 0 and find the biggest value after
replace element at 0 with biggest value
element 1, find the biggest value after
replace it
... etc
replace last value with -1
*/

replaceElements([17, 18, 5, 4, 6, 1]); // [18,6,6,6,1,-1]
