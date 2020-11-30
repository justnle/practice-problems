/*
A left rotation operation on an array shifts each of the array's
elements 1 unit to the left. For example, if 2 left rotations
are performed on an array [1,2,3,4,5], then the array would become
[3,4,5,1,2].

Given an array a of n integers and a number, d, perform d left
rotations on the array. Return the updated array to be printed as
a single line of space-separated integers.
*/

/* pseudocode */

/*
find the portion of the array that will be 'rotated'
find the remaining portion of the array
add the rotated portion to the remaining portion
*/

function rotLeft(a, d) {
    const end = a.slice(0, d);
    const rot = a.slice(d, a.length);

    for (const num of end) {
        rot.push(num);
    }

    return rot;
}

rotLeft([1, 2, 3, 4, 5], 4); // expected 5 1 2 3 4
rotLeft(
    [
        41,
        73,
        89,
        7,
        10,
        1,
        59,
        58,
        84,
        77,
        77,
        97,
        58,
        1,
        86,
        58,
        26,
        10,
        86,
        51
    ],
    10
); // 77 97 58 1 86 58 26 10 86 51 41 73 89 7 10 1 59 58 84 77
