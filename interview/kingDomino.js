/* eslint-disable operator-linebreak */

/*
King Domino is a board game where you try to lay down dominos representing
various terrains types to score the most points. Specifically in King Domino,
you get points for having contiguous areas with crowns on them.

Your job is to take a completed board and figure out how many points it scores.
As an example, here`s a completed board:

For each contiguous area, you get points equal to the number of squares times
the number of crowns in that area. For example, the green forests in the bottom
has 3 crowns and 7 squares, so it`s worth 21 points. The 3 lakes are in
separate regions, so they are worth 1, 4, and 0 points. Doing the same across
all of the different areas would add up to 59 points for this board.

The input will come as 2 5x5 arrays, one for the board and one for the
crowns. For the image above, the board will appear as:

1. SSSLL
2. SWWWL
3. LWKWL
4. FWWFF
5. FFFFL

Where the possible board are:
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
s1 = 4, 1 crown = 4 points
l1 = 4, 1 crown = 4 points
l2 = 1, 1 crown = 1 points
l3 = 1, 0 crown = 0 points
w1 = 7, 2 crown = 14 points
f1 = 7, 3 crown = 21 points
k1 = 1, 0 crown = 0 points
*/

const board = [
    [`S`, `S`, `S`, `L`, `L`],
    [`S`, `W`, `W`, `W`, `L`],
    [`L`, `W`, `K`, `W`, `L`],
    [`F`, `W`, `W`, `F`, `F`],
    [`F`, `F`, `F`, `F`, `L`]
];

const crowns = [
    [0, 0, 0, 0, 0],
    [1, 0, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [0, 0, 0, 1, 0],
    [0, 0, 1, 1, 0]
];

const kingDomino = (board, crowns) => {
    const terrains = {};
    let groupCount = 0;
    let points = 0;

    if (
        board.length === 0 ||
        crowns.length === 0 ||
        board.length !== crowns.length
    ) {
        return 0;
    }

    board = board.map((arr) => arr.map((tile) => tile.toLowerCase()));

    for (let i = 0; i < board.length; ++i) {
        for (let j = 0; j < board[i].length; ++j) {
            const type = board[i][j];

            if (!terrains[type]) {
                terrains[type] = {
                    size: 1,
                    idx: {
                        [i]: [j]
                    },
                    crowns: crowns[i][j]
                };

                if (terrains[type].crowns > 3) {
                    return 0;
                }
            } else {
                if (terrains[type].idx[i]) {
                    ++terrains[type].size;
                    terrains[type].idx[i].push(j);

                    if (crowns[i][j] !== 0) {
                        terrains[type].crowns += crowns[i][j];
                    }
                } else {
                    if (
                        terrains[type].idx[i - 1] &&
                        terrains[type].idx[i - 1].includes(j)
                    ) {
                        ++terrains[type].size;
                        terrains[type].idx[i] = [j];

                        if (crowns[i][j] !== 0) {
                            terrains[type].crowns += crowns[i][j];
                        }
                    } else {
                        ++groupCount;

                        terrains[`${type}-${groupCount}`] = {
                            size: 1,
                            idx: {
                                [i]: [j]
                            },
                            crowns: crowns[i][j]
                        };
                    }
                }
            }
        }
    }

    for (const type in terrains) {
        if (type) {
            points += terrains[type].size * terrains[type].crowns;
        }
    }

    return points;
};

kingDomino(board, crowns);

export default kingDomino;
