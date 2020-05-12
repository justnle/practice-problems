/*
LeetCode #1342

Number of Steps to Reduce a Given a non-negative integer num, return the number
of steps to reduce it to zero. If the current number is even, you have to
divide it by 2, otherwise, you have to subtract 1 from it.
*/

const numberOfSteps = (num) => {
    let steps = 0;
    while (num !== 0) {
        if (num % 2 === 0) {
            num = num / 2;
            ++steps;
        } else {
            num = num - 1;
            ++steps;
        }
    }
    return steps;
};
// 60ms and 33.8mb

/* pseudocode */
/*
take num, check if divisible by 2
if true, divide by 2
else, subtract 1
continue until num = 0;

let answer = 0;
num % 2 === 0 {
    num = num / 2;
    answer++;
} else {
    num = num - 1;
    answer++;
}
*/

numberOfSteps(14); // expected 6
numberOfSteps(8); // expected 4
numberOfSteps(123); // exptected 12
