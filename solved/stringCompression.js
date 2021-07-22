/*
LeetCode #443

Given an array of characters chars, coprjess it using the
following algorithm:

Begin with an empty string s. For each group of consecutive
repeating characters in chars:

- If the group's length is 1, append the character to s.
- Otherwise, append the character followed by the group's length.

The compresseded string s should not be returned separately, but
instead be stored in the input character array chars. Note that
group lengths that are 10 or longer will be split into multiple
characters in chars.

After you are done modifying the input array, return the new length
of the array.

You must write an algorithm that uses only constant extra space.
*/

const compress = (chars) => {
    let s = chars[0];
    let compare = chars[0];
    let counter = 1;

    for (let i = 1; i < chars.length; ++i) {
        const check = chars[i];

        if (compare === check) {
            ++counter;
        } else {
            if (counter > 1) {
                s += counter;
            }
            compare = check;
            s += compare;
            counter = 1;
        }
    }

    if (counter !== 1) {
        s += counter;
    }

    chars.length = 0;

    for (const char of s.split(``)) {
        chars.push(char);
    }

    return chars.length;
};

/* pseudocode */
// take character
// character count === 1
// if next character is the same, increment
// if next character is different, take character
// repeat

compress(['a', 'a', 'b', 'b', 'c', 'c', 'c']);
compress(['a', 'a', 'a', 'b', 'b', 'a', 'a']);
compress(['a', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b']);
compress(['a', 'b', 'c']);

// 72ms runtime, faster than 97.27% of submissions
// 40.8mb of memory usage, less than  52.39 of submissions
