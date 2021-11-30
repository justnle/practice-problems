/*
HackerRank Recursive Digit Sum
*/

/*
pseudocode

if n.length === 1
return n

take n, convert to string
n.toString
concat n, k times, in new var
concat += n, k times

split concat individually
concat.split('')

iterate over split concat
parseInt each split char
+= to a new var to add

call superdigit on the new num


(before concat and split, you can just sum all the digits of n and multiply by k)
*/

const superDigit = (n, k) => {
    const numStr = n.toString();
    let p = ``;
    let num = 0;

    if (numStr.length === 1) {
        return n;
    }

    for (let i = 0; i < k; ++i) {
        p += numStr;
    }

    const pSplit = p.split(``);

    for (const char of pSplit) {
        num += parseInt(char);
    }

    superDigit(num, 1);
};
