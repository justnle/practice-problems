/*
HackerRank

A student is taking a cryptography class and has found anagrams to
be very useful. Two strings are anagrams of each other if the first
string's letters can be rearranged to form the second string. In
other words, both strings must contain the same exact letters in the
same exact frequency. For example, bacdc and dcbac are anagrams, but
bacdc and dcbad are not.

The student decides on an encryption scheme that involves two large
strings. The encryption is dependent on the minimum number of character
deletions required to make the two string anagrams. Determine this
number.

Given two strings, a and b, that may or may not be of the same length,
determine the minimum number of character deletions required to make
a and b anagrams. Any characters can be deleted from either of the
strings.

Example
a = `cde`
b = `dcf`

Delete e from a and f from b so that the remaining strings are cd
and dc are anagrams. This takes 2 character deletions.
*/

const makeAnagram = (a, b) => {
    const aArr = a.split(``).sort();
    const bArr = b.split(``).sort();
    const aHash = {};
    const bHash = {};
    const resultArr = [];
    let result = 0;

    createHash(aArr, aHash);
    createHash(bArr, bHash);
    compareHash(aHash, bHash, resultArr);
    compareHash(bHash, aHash, resultArr);

    for (const num of resultArr) {
        result += num;
    }
    return result;
};

const createHash = (arr, hash) => {
    for (const char of arr) {
        !hash[char] ? (hash[char] = 1) : (hash[char] += 1);
    }
};

const compareHash = (hashOne, hashTwo, arr) => {
    let counter = 0;

    for (const char in hashOne) {
        if (hashTwo[char]) {
            if (hashTwo[char] > hashOne[char]) {
                counter += hashTwo[char] - hashOne[char];
                hashTwo[char] = hashOne[char];
            }
            if (hashOne[char] > hashTwo[char]) {
                counter += hashOne[char] - hashTwo[char];
                hashOne[char] = hashTwo[char];
            }
        } else {
            counter += hashOne[char];
        }
    }
    arr.push(counter);
};

makeAnagram(`cde`, `abc`); // 4
makeAnagram(`showman`, `woman`); // 2
makeAnagram(`fcrxzwscanmligyxyvym`, `jxwtrhvujlmrpdoqbisbwhmgpmeoke`); // 30
