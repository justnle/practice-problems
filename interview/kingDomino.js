/*
King Domino is a board game where you try to lay down dominos representing
various terrain types to score the most points. Specifically in King Domino,
you get points for having contiguous areas with crowns on them.

Your job is to take a completed board and figure out how many points it scores.
As an example, here`s a completed board:

For each contiguous area, you get points equal to the number of squares times
the number of crowns in that area. For example, the green forests in the bottom
has 3 crowns and 7 squares, so it`s worth 21 points. The 3 lakes are in
separate regions, so they are worth 1, 4, and 0 points. Doing the same across
all of the different areas would add up to 59 points for this board.

The input will come as 2 5x5 arrays, one for the terrains and one for the
crowns. For the image above, the terrains will appear as:

1. SSSLL
2. SWWWL
3. LWKWL
4. FWWFF
5. FFFFL

Where the possible terrains are:
    - S = Swamp
    - L = Lake
    - W = Wheat
    - F = Forest
    - G = Grass
    - M = Mine
    - K = Kingdom

And the crowns for the board above are

1. 00000
2. 10110
3. 10001
4. 00010
5. 00110

Note that up to 3 crowns can appear on a single tile.

Given these 2 arguments, return an integer for the number of points
the board will score.
*/

/*
s1 = 4
l1 = 4
l2 = 1
l3 = 1
w1 = 7
f1 = 7
k1 = 1
*/

const board = [
    [`S`, `S`, `S`, `L`, `L`],
    [`S`, `W`, `W`, `W`, `L`],
    [`L`, `W`, `K`, `W`, `L`],
    [`F`, `W`, `W`, `F`, `F`],
    [`F`, `F`, `F`, `F`, `L`]
];

const crowns = [
    [`0`, `0`, `0`, `0`, `0`],
    [`1`, `0`, `1`, `1`, `0`],
    [`1`, `0`, `0`, `0`, `1`],
    [`0`, `0`, `0`, `1`, `0`],
    [`0`, `0`, `1`, `1`, `0`]
];

const kingDomino = (terrains, crowns) => {
    let count = 0;
    const groups = {};

    for (let i = 0; i < terrains.length; ++i) {
        for (let j = 0; j < terrains[i].length; ++j) {
            const type = terrains[i][j];

            if (!groups[type]) {
                groups[type] = {
                    [count]: {
                        size: 1,
                        idx: {
                            [i]: [j]
                        }
                    }
                };
            } else {
                if (groups[type][count].idx[i]) {
                    ++groups[type].size;
                    groups[type][count].idx[i].push(j);
                } else {
                    if (
                        groups[type][count].idx[i - 1] &&
                        groups[type][count].idx[i - 1].includes(j)
                    ) {
                        if (groups[type][count].idx[i - 1].includes(j)) {
                            ++groups[type][count].size;
                            groups[type][count].idx[i] = [j];
                        }
                    } else {
                        ++count;
                        groups[type] = {
                            [count]: {
                                size: 1,
                                idx: {
                                    [i]: [j]
                                }
                            }
                        };
                    }
                }
            }
        }
    }
    console.log(groups);
};

kingDomino(board, crowns);
