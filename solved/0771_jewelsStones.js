/*
LeetCode #771

You're given strings J representing the types of stones that are jewels, and S
representing the stones you have.  Each character in S is a type of stone you
have. You want to know how many of the stones you have are also jewels.

The letters in J are guaranteed distinct, and all characters in J and S
are letters. Letters are case sensitive, so "a" is considered a different
type of stone from "A".
*/

// const numJewelsInStones = (J, S) => {
//     let count = 0;
//     const jewels = J.split(``);
//     const stones = S.split(``);

//     if (J.length === 0 || S.length === 0) {
//         return 0;
//     }

//     for (const stone of stones) {
//         for (let i = 0; i < jewels.length; ++i) {
//             jewels[i] === stone ? ++count : count;
//         }
//     }
//     return count;
// };
// 64ms and 35.4mb .. O(n^2)

const numJewelsInStones = (J, S) => {
    const jewelMap = J.split(``).reduce((obj, j) => {
        obj[j] = true;
        return obj;
    }, {});
    return S.split(``).reduce(
        (count, s) => (jewelMap[s] ? count + 1 : count),
        0
    );
};

numJewelsInStones(`aA`, `aAAbbbb`); // expected 3
numJewelsInStones(`z`, `ZZ`); // 0
