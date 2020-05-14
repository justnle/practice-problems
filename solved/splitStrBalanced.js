/*
LeetCode #1221

Balanced strings are those who have equal quantity of 'L' and 'R' characters.

Given a balanced string s split it in the maximum amount of balanced strings.

Return the maximum amount of splitted balanced strings.
*/

const balancedStringSplit = (s) => {
    const str1 = [];
    const str2 = [];
    let answer = 0;

    for (let i = 0; i < s.length; ++i) {
        if (str1.length === 0 || str2.length !== str1.length) {
            if (str1.length === 0) {
                str1.push(s.charAt(i));
            } else if (!str1.includes(s.charAt(i))) {
                str2.push(s.charAt(i));
            } else {
                str1.push(s.charAt(i));
            }
        } else {
            ++answer;
            str1.length = 0;
            str2.length = 0;
            str1.push(s.charAt(i));
        }
    }
    answer++;
    return answer;
};
// 56ms and 35.4mb .. 63.33% faster

balancedStringSplit(`RLRRLLRLRL`); // 4
balancedStringSplit(`RLLLLRRRLR`); // 3
balancedStringSplit(`LLLLRRRR`); // 1
