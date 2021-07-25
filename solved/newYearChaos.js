/*
It is New Year's Day and people are in line for the Wonderland rollercoaster
ride. Each person wears a sticker indicating their initial position in the
queue. Initial positions increment by 1 from 1 at the front of the line to n
at the back.

Any person in the queue can bribe the person directly in front of them to
swap positions. If two people swap positions, they still wear the same
sticker denoting their original place in line. One person can bribe at most
two others. For example, if n = 8 and Person 5 bribes Person 4, the queue
will look like this: 1, 2, 3, 5, 4, 6, 7, 8.

Fascinated by this chaotic queue, you decide you must know the minimum of
bribes that took place to get the queue into its current state. If anyone
has bribed more than two people, the line is too chaotic to compute the
answer.
*/

/* pseudocode */

/*
check initial state?

see which person(s) has moved
count their moves

more than 3, too chaotic

1 index is 0
2 index is 1
3 index is 2
etc...

check index of each number
*/

function minimumBribes(q) {
    let bribes = 0;
    const end = q.length - 1;

    for (let i = end; i >= 0; --i) {
        if (q[i] !== i + 1) {
            if (q[i - 1] === i + 1) {
                const temp = q[i];
                q[i] = i + 1;
                q[i - 1] = temp;
                ++bribes;
            } else if (q[i - 2] === i + 1) {
                const temp = q[i - 1];
                q[i - 1] = i + 1;
                q[i - 2] = temp;
                ++bribes;
                ++i;
            } else {
                console.log(`Too chaotic`);
                return;
            }
        }
    }
    console.log(bribes);
}

// minimumBribes([2, 1, 5, 3, 4]); // 3
// minimumBribes([5, 1, 2, 3, 7, 8, 6, 4]); // too chaotic
minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]); // 7
// minimumBribes([1, 2, 5, 3, 4, 7, 8, 6]); // 4
