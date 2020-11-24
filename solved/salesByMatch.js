/*
Alex works at a clothing store. THere is a large pile of socks that must
be paired by color for sale. Given an array of integers representing the
color of each sock, determine how many pairs of socks with matching colors
there are.

For example, there are n = 7 socks with colors ar = [1,2,1,2,1,3,2]. THere is
one pair of color 1 and one of color 2. There are three odd socks left, one
of each color. The number of pairs is 2

The function must return an integer representing the number of matching pairs
of socks that are available.
*/

/* pseudocode */

/*
1. create a hash map of what colors there are
2. count how many of each number there are
3. see how many times each number is divisible by two
*/

function sockMerchant(n, ar) {
    const hash = {};
    let pairs = 0;

    for (const color of ar) {
        if (!hash[color]) {
            hash[color] = 1;
        } else {
            hash[color] += 1;
        }
    }

    for (const [key, value] of Object.entries(hash)) {
        const result = value / 2;
        pairs += Math.floor(result);
    }

    return pairs;
}

sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);
