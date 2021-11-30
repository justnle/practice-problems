/*
HackerRank Recursive Digit Sum
*/

const superDigit = (n, k) => {
    const p = (
        n
            .split(``)
            .map(Number)
            .reduce((a, b) => a + b, 0) * k
    ).toString();

    return p.length > 1 ? superDigit(p, 1) : p;
};

superDigit(148, 3); // 3

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


(before concat and split, you can just sum all
    the digits of n and multiply by k)
*/
