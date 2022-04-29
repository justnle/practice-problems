/*
LeetCode #424 - Longest Repeating Character Replacement - Medium

You are given a string s and an integer k. You can choose any character
of the string and change it to any other uppercase English character. You
can perform this operation at most k times.

Return the length of the longest substring containing the same letter you
can get after performing the above operations.

Example 1:
Input: s = `ABAB`, k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.

Example 2:
Input: s = `AABABBA`, k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form `AABBBBA`.
The substring `BBBB` has the longest repeating letters, which is 4.
*/

const characterReplacement = (s, k) => {
    // Create a hashmap of the characters and their counts
    const count = {};
    // pointer for the end of the window
    let p = 0;
    // longest length
    let res = 0;
    // most frequently occuring character
    let maxFreq = 0;

    // iterate through the string
    for (let i = 0; i < s.length; ++i) {
        // increment the count of the current character
        !count[s[i]] ? (count[s[i]] = 1) : ++count[s[i]];
        // update the max frequency, compares count
        // of the current character to the maxFreq
        maxFreq = Math.max(maxFreq, count[s[i]]);

        // while the window is not full and the current
        // character is not the most frequent, move the
        // window forward
        while (i - p + 1 - maxFreq > k) {
            --count[s[p]];
            ++p;
        }
        res = Math.max(res, i - p + 1);
    }
    return res;
};

characterReplacement(`ABAB`, 2); // 4
characterReplacement(`AABABBA`, 1); // 4
characterReplacement(`AAAB`, 0); // 3

// 92ms, faster than 76.06% of js submissions
// 42.7mb, less than 63.55% of js submissions
