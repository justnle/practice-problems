/*
LeetCode #804

International Morse Code defines a standard encoding where
each letter is mapped to a series of dots and dashes, as follows:
"a" maps to ".-", "b" maps to "-...", "c" maps to "-.-.", and so on.

For convenience, the full table for the 26 letters of the English
alphabet is given below:

Now, given a list of words, each word can be written as a concatenation \
of the Morse code of each letter. For example, "cba" can be written
as "-.-..--...", (which is the concatenation "-.-." + "-..." + ".-").
We'll call such a concatenation, the transformation of a word.

Return the number of different transformations among all words we have.
*/

const uniqueMorseRepresentations = (words) => {
    const morse = [
        `.-`,
        `-...`,
        `-.-.`,
        `-..`,
        `.`,
        `..-.`,
        `--.`,
        `....`,
        `..`,
        `.---`,
        `-.-`,
        `.-..`,
        `--`,
        `-.`,
        `---`,
        `.--.`,
        `--.-`,
        `.-.`,
        `...`,
        `-`,
        `..-`,
        `...-`,
        `.--`,
        `-..-`,
        `-.--`,
        `--..`
    ];
    const alphabet = [
        `a`,
        `b`,
        `c`,
        `d`,
        `e`,
        `f`,
        `g`,
        `h`,
        `i`,
        `j`,
        `k`,
        `l`,
        `m`,
        `n`,
        `o`,
        `p`,
        `q`,
        `r`,
        `s`,
        `t`,
        `u`,
        `v`,
        `w`,
        `x`,
        `y`,
        `z`
    ];

    let transformation = ``;
    const transformArr = [];

    for (const word of words) {
        for (const letter of word) {
            transformation += morse[alphabet.indexOf(letter)];
        }

        if (!transformArr.includes(transformation)) {
            transformArr.push(transformation);
            transformation = ``;
        } else {
            transformation = ``;
        }
    }
    return transformArr.length;
};
// 52ms and 36.2mb, 94.52% faster

/* pseudocode
array of morse code
array of alphabet

words input is an array
iterate over words to get each word
iterate over each word to get each letter
search alphabet array to find index of letter
take that index and get the morse code from morseArr[i]
create a string
concat the remaining morse code letters
if it does not exist, push it to an array

take the length of the transformation array
*/
uniqueMorseRepresentations([`gin`, `zen`, `gig`, `msg`]); // 2
