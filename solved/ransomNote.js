/*
HackerRank

Harold is a kidnapper who wrote a ransom note, but now he is worried
it will be traced back to him through his handwriting. He found a magazine
and wants to know if he can cut out whole words from it and use them to
create an untraceable replica of his ransom note. The words in hsi note are
case sensitive and he must use only whole words available int he magazine.
He cannot use substrings or concatenation to create the words he needs.

Givent he words in the magazine and the words in the ransom note, print Yes
if he can replicate his ransom note exactly using whole wors from the
magazine; otherwise print No.

Example
magazine = `attack at dawn`
note = `Attack at dawn`

The magazine has all the right words, but there is a case mismatch. The
answer is No.
*/

const checkMagazine = (magazine, note) => {
    const magazineHash = {};
    const noteHash = {};

    hashMaker(magazine, magazineHash);
    hashMaker(note, noteHash);

    for (const word in noteHash) {
        if (!magazineHash[word] || noteHash[word] > magazineHash[word]) {
            return console.log(`No`);
        }
    }
    console.log(`Yes`);
};

const hashMaker = (sourceArr, resultHash) => {
    for (const word of sourceArr) {
        !resultHash[word] ? (resultHash[word] = 1) : (resultHash[word] += 1);
    }
};

checkMagazine(
    [`give`, `me`, `one`, `grand`, `today`, `night`],
    [`give`, `one`, `grand`, `today`]
); // Yes
