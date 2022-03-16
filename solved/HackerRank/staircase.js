/*
HackerRank Staircase

The base and height of a staircase are both equal to n. It is drawn using
# symbols and spaces. The last line is not preceded by any spaces.

Write a program that prints a staircase of size n.
*/

const staircase = (n) => {
    for (let i = 1; i <= n; ++i) {
        let staircase = ``;

        while (staircase.length < n - i) {
            staircase += ` `;
        }

        while (staircase.length < n) {
            staircase += `#`;
        }
        console.log(staircase);
    }
};

staircase(4);
/*
   #
  ##
 ###
####
*/
