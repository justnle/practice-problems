/*
LeetCode #1370

Given a string s. You should re-order the string using the following algorithm:

Pick the smallest character from s and append it to the result.
Pick the smallest character from s which is greater than the last appended
character to the result and append it.
Repeat step 2 until you cannot pick more characters.
Pick the largest character from s and append it to the result.
Pick the largest character from s which is smaller than the last appended
character to the result and append it.
Repeat step 5 until you cannot pick more characters.
Repeat the steps from 1 to 6 until you pick all characters from s.
In each step, If the smallest or the largest character appears more
than once you can choose any occurrence and append it to the result.

Return the result string after sorting s with this algorithm.
*/

const sortString = (s) => {
    let sorted;
    const alphabet = `abcdefghijklmnopqrstuvwxyz`;
    const hash = {};

    for (const letter of alphabet) {
        hash[letter] = 0;
    }

    for (const letter of s) {
        hash[letter] += 1;
    }

    console.log(hash);
};

sortString(`aaaabbbbcccc`); // abccbaabccba
sortString(`rat`); // art
sortString(`leetcode`); // cdelotee;
sortString(`gggggg`); // gggggg
sortString(`spo`); // ops
