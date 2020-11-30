/*
Given a 6x6 2D array, arr:

1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0

An hourglass in A is a subset of values with indicies
falling in this pattern in arr's graphical representation:

a b c
  d
e f g

There are 16 hourglasses in arr. An hourglass sum is the
sum of an hourglass' values. Calculate the hourglass sum
for every hourglass in arr, then print the maximum
hourglass sum. The array will always be 6 x 6.
*/

/* pseudocode */

/*
Top of hourglass 1 is arr[0], arr[1], arr[2]
Middle of hourglass 1 is arr[1]
Bottom of hourglass 1 is arr[0], arr[1], arr[2]

increase by 1, up to 4 for each to get other hourglasses

i = 0, ++i until i < 4 (so i = 3, 4 total iterations)
j = 0, ++j until j < 4 (so j = 3, 4 total iterations)

i will iterate across the arrays horizontally
j will iterate across the arrays vertically
*/

function hourglassSum(arr) {
    const hourglass = [];

    for (let i = 0; i < 4; ++i) {
        for (let j = 0; j < 4; ++j) {
            let sum = 0;

            for (let k = 0; k < 3; ++k) {
                if (k % 2 === 0) {
                    for (let l = 0; l < 3; ++l) {
                        sum += arr[k + i][l + j];
                    }
                } else {
                    sum += arr[k + i][1 + j];
                }
            }
            hourglass.push(sum);
        }
    }
    return Math.max(...hourglass);
}

hourglassSum([
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]
]); // expected 19

hourglassSum([
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 9, 2, -4, -4, 0],
    [0, 0, 0, -2, 0, 0],
    [0, 0, -1, -2, -4, 0]
]); // expected 13
