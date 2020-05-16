/*
LeetCode #1266

On a plane there are n points with integer coordinates points[i] = [xi, yi].
Your task is to find the minimum time in seconds to visit all points.

You can move according to the next rules:

In one second always you can either move vertically, horizontally by one unit or
diagonally (it means to move one unit vertically and one unit horizontally in
one second). You have to visit the points in the same order as they appear
in the array.
*/

// const minTimeToVisitAllPoints = (points) => {
// const arrOne = [];
// const arrTwo = [];
// let arrOneDiff = 0;
// let arrTwoDiff = 0;
// for (const point of points) {
//     arrOne.push(point[0]);
//     arrTwo.push(point[1]);
// }
// for (let i = 0; i < arrOne.length - 1; ++i) {
//     arrOneDiff += Math.abs(arrOne[i] - arrOne[i + 1]);
// }
// for (let i = 0; i < arrTwo.length - 1; ++i) {
//     arrTwoDiff += Math.abs(arrTwo[i] - arrTwo[i + 1]);
// }
// if (arrOneDiff > arrTwoDiff) {
//     return arrOneDiff;
// } else {
//     return arrTwoDiff;
// }
// };

/*
pseudocode

iterate over points
push points[0] to one arr
push points [1] to second array

reduce both arrays by subtraction
return the largest sum as answer
*/

const minTimeToVisitAllPoints = (points) => {
    let difference = 0;

    for (let i = 0; i < points.length - 1; ++i) {
        const xDiff = Math.abs(points[i + 1][0] - points[i][0]);
        const yDiff = Math.abs(points[i + 1][1] - points[i][1]);

        if (xDiff > yDiff) {
            difference += xDiff;
        } else {
            difference += yDiff;
        }
    }
    return difference;
};
// 80ms and 34.6mb, 17.86% faster

/*
pseudocode

for loop points array
subtract first (x,y) from next (x,y)
whatever number is larger
add to the difference
*/

minTimeToVisitAllPoints([
    [1, 1],
    [3, 4],
    [-1, 0]
]); // 7
minTimeToVisitAllPoints([
    [3, 2],
    [-2, 2]
]); // 5

minTimeToVisitAllPoints([
    [559, 511],
    [932, 618],
    [-623, -443],
    [431, 91],
    [838, -127],
    [773, -917],
    [-500, -910],
    [830, -417],
    [-870, 73],
    [-864, -600],
    [450, 535],
    [-479, -370],
    [856, 573],
    [-549, 369],
    [529, -462],
    [-839, -856],
    [-515, -447],
    [652, 197],
    [-83, 345],
    [-69, 423],
    [310, -737],
    [78, -201],
    [443, 958],
    [-311, 988],
    [-477, 30],
    [-376, -153],
    [-272, 451],
    [322, -125],
    [-114, -214],
    [495, 33],
    [371, -533],
    [-393, -224],
    [-405, -633],
    [-693, 297],
    [504, 210],
    [-427, -231],
    [315, 27],
    [991, 322],
    [811, -746],
    [252, 373],
    [-737, -867],
    [-137, 130],
    [507, 380],
    [100, -638],
    [-296, 700],
    [341, 671],
    [-944, 982],
    [937, -440],
    [40, -929],
    [-334, 60],
    [-722, -92],
    [-35, -852],
    [25, -495],
    [185, 671],
    [149, -452]
]); // 49088
