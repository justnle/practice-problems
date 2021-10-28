/*
HackerRank Caesar's Cipher

Julius Caesar protected his confidential information by encrypting it using a
cipher. Caesar's cipher shifts each letter by a number of letters. If the shift
takes you past the end of the alphabet, just rotate back to the front of the
alphabet. In the case of a rotation by 3, w x y and z would map to z, a, b and c

Example:
s = There's-a-starman-waiting-in-the-sky
k = 3

The alphabet is rotated by 3, matching the mapping above. The encrypted string
is: Wkhuh'v-d-vwdupdq-zdlwlqj-lq-wkh-vnb

The cipher only encrypts letters; symbols, such as -, remain unencrypted.

Sample
Input: s = middle-Outz, k = 2
Output: offkng-Qwvb
*/

const caesarCipher = (s, k) => {
    const alphabet = `abcdefghijklmnopqrstuvwxyz`;
    let res = ``;
    let shift = 0;

    if (k > 25) {
        shift = k % 26;
    } else {
        shift = k;
    }

    for (let i = 0; i < s.length; ++i) {
        if (alphabet.includes(s.toLowerCase().charAt(i))) {
            if (s.charAt(i) !== s.charAt(i).toUpperCase()) {
                const lowerIndex = alphabet.indexOf(s.charAt(i));

                if (lowerIndex + shift > 25) {
                    res += alphabet.charAt(lowerIndex + shift - 26);
                } else {
                    res += alphabet.charAt(lowerIndex + shift);
                }
            } else {
                const upperIndex = alphabet.indexOf(s.toLowerCase().charAt(i));

                if (upperIndex + shift > 25) {
                    res += alphabet
                        .charAt(upperIndex + shift - 26)
                        .toUpperCase();
                } else {
                    res += alphabet.charAt(upperIndex + shift).toUpperCase();
                }
            }
        } else {
            res += s.charAt(i);
        }
    }
    return res;
};

caesarCipher(`www.abc.xy`, 87); // Lipps_Asvph!
