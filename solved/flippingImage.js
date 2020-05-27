/*
LeetCode #832
Given a binary matrix A, we want to flip the image horizontally,
then invert it, and return the resulting image.

To flip an image horizontally means that each row of the image is
reversed.  For example, flipping [1, 1, 0] horizontally results in [0, 1, 1].

To invert an image means that each 0 is replaced by 1, and each 1 is
replaced by 0. For example, inverting [0, 1, 1] results in [1, 0, 0].
*/

const flipAndInvertImage = (A) => {
    for (const array of A) {
        array.reverse();
    }

    A.map((array) => {
        for (let i = 0; i < array.length; ++i) {
            if (array[i] === 0) {
                array[i] = 1;
            } else {
                array[i] = 0;
            }
        }
    });
    return A;
};
// 76ms, 21.91% faster and 36.1mb

flipAndInvertImage([
    [1, 1, 0],
    [1, 0, 1],
    [0, 0, 0]
]); // [[1,0,0],[0,1,0],[1,1,1]]
flipAndInvertImage([
    [1, 1, 0, 0],
    [1, 0, 0, 1],
    [0, 1, 1, 1],
    [1, 0, 1, 0]
]); // [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
