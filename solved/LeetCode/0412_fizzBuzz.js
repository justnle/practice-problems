'use strict';
/*
LeetCode #412

Given an integer n, return a string array answer (1-indexed) where:
- answer[i] == 'FizzBuzz' if i is divisible by 3 and 5
- answer[i] == 'Fizz' if i is divisible by 3
- answer[i] == 'Buzz' if i is divisible by 5
- answer[i] == 'FizzBuzz' if i none of the above conditions are true
*/

function fizzBuzz(n) {
    const answer = [];

    for (let i = 1; i <= n; ++i) {
        if (i % 3 === 0 && i % 5 !== 0) {
            answer.push(`Fizz`);
        } else if (i % 5 === 0 && i % 3 !== 0) {
            answer.push(`Buzz`);
        } else if (i % 3 === 0 && i % 5 === 0) {
            answer.push(`FizzBuzz`);
        } else {
            answer.push(i.toString());
        }
    }

    return answer;
}

fizzBuzz(15);
