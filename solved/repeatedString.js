/*
Lilah has a string, s, of lowercase English letters that she repeated infinitely
many times. Given an integer, n, find and print the number of letter a's im the
first n letters of Lilah's infinite string.

For example, if the string s = 'abcac' and n = 10, the substring we consider
is abcacabcac, the first 10 characters of her infinite string. There are 4
occurences of a in the substring.
*/

/* pseudocode */

/*
count string length
count how many a's in the string
see how many times string goes into character limit, no remainder
see if the first letter of the string is a, if it is, add
return the count
*/

function repeatedString(s, n) {
    let aCount = 0;
    const quotient = Math.floor(n / s.length);
    const remainder = n % s.length;
    const remainderString = s.slice(0, remainder);

    for (const letter of s) {
        if (letter === `a`) {
            ++aCount;
        }
    }

    let occurences = aCount * quotient;

    for (const a of remainderString) {
        if (a === `a`) {
            ++occurences;
        }
    }
    return occurences;
}

repeatedString(`aba`, 10); // expected 7
repeatedString(`a`, 1000000000000); // expected 1000000000000
repeatedString(
    `epsxyyflvrrrxzvnoenvpegvuonodjoxfwdmcvwctmekpsnamchznsoxaklzjgrqruyzavshfbmuhdwwmpbkwcuomqhiyvuztwvq`,
    549382313570
); // expected 16481469408
