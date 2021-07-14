/*
Emma is playing a new mobile game that starts w/ consecutively numbered clouds.
Some of the clouds are thunderheads and others are cumulus. She can jump on any
cumulus cloud having a number that is equal to the number of the current clouds
plus 1 or 2. She must avoid the thunderheads. Determine the minimum number of
jumps it will take Emma to jump from her starting position to the last cloud.
It is always possible to win the game.

For each game, Emma will get an array of clouds numbered 0 if they are safe or
1 if they must be avoided. For example, c = [0,1,0,0,0,1,0] indexed from 0...6.
The number on each cloud is its index in the list so she must avoid clouds at
indexes 1 and 5. She could follow the following paths:

0 -> 2 -> 4 -> 6 or 0 -> 2 -> 3 -> 4 -> 6.

The first path takes 3 jumps while the second takes 4.
*/

/* pseudocode */

/*
jumps = 0
must avoid indexes with a value of 1
can jump one or two indexes

start at index 0
check index + 2, if 0 jump two
++jump
else, jump 1

return jumps
*/

function jumpingOnClouds(c) {
    let jumps = 0;
    let position = 0;

    while (position < c.length - 1) {
        if (c[position + 2] === 0) {
            ++jumps;
            position += 2;
        } else {
            ++jumps;
            position += 1;
        }
    }
    return jumps;
}

jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]); // expected 4
jumpingOnClouds([0, 0, 0, 0, 1, 0]); // expected 3
