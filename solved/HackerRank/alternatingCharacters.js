/*
HackerRank

You are given a string containing characters A and B only.
Your task is to change it into a string such that thers are
no matching adjacent characters. To do this, you are allowed
to delete zero or more characters in the string.

Your task is to find the minimum number of required deletions.

Example
s = `AABAAB`

Remove an A at positions 0 and 3 to make s = ABAB in 2 deletions.
*/

const alternatingCharacters = (s) => {
    let counter = 0;
    let compare = s.charAt(0);

    for (let i = 1; i < s.length; ++i) {
        if (s.charAt(i) === compare) {
            ++counter;
        } else {
            compare = s.charAt(i);
        }
    }
    return counter;
};

alternatingCharacters(`AAAA`); // 3
alternatingCharacters(`BBBBB`); // 4
alternatingCharacters(`ABABABAB`); // 0
alternatingCharacters(`BABABA`); // 0
alternatingCharacters(`AAABBB`); // 4
