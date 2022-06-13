import kingDomino from './kingDomino';

/*
testBoard and testCrowns are the initial
values given in the challenge description

total points for this board is 44
*/

const testBoard = [
    [`S`, `S`, `S`, `L`, `L`],
    [`S`, `W`, `W`, `W`, `L`],
    [`L`, `W`, `K`, `W`, `L`],
    [`F`, `W`, `W`, `F`, `F`],
    [`F`, `F`, `F`, `F`, `L`]
];

const testCrowns = [
    [0, 0, 0, 0, 0],
    [1, 0, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [0, 0, 0, 1, 0],
    [0, 0, 1, 1, 0]
];

/*
s6
w24
l15
f16
*/
const bigBoard = [
    [`S`, `S`, `S`, `S`, `L`, `L`],
    [`S`, `S`, `W`, `W`, `W`, `L`],
    [`L`, `W`, `K`, `W`, `L`, `L`],
    [`F`, `W`, `W`, `W`, `F`, `F`],
    [`F`, `F`, `F`, `F`, `F`, `L`]
];

const bigCrowns = [
    [0, 0, 0, 0, 0, 0],
    [1, 0, 1, 1, 0, 1],
    [1, 0, 0, 0, 1, 1],
    [0, 0, 0, 1, 0, 0],
    [0, 0, 1, 1, 0, 0]
];

test(`An empty board to be 0 points`, () => {
    expect(kingDomino([], testCrowns)).toBe(0);
});

test(`A board with an no testCrowns to be 0 points`, () => {
    expect(kingDomino(testBoard, [])).toBe(0);
});

test(`No board and no testCrowns to be 0 points`, () => {
    expect(kingDomino([], [])).toBe(0);
});

test(`testBoard with testCrowns to be 44 points`, () => {
    expect(kingDomino(testBoard, testCrowns)).toBe(44);
});

// eslint-disable-next-line max-len
test(`If a crown tile contains more than 3 testCrowns, it is invalid and 0 points`, () => {
    expect(
        kingDomino(testBoard, [
            [0, 0, 0, 0, 0],
            [1, 0, 1, 1, 0],
            [1, 0, 5, 0, 1],
            [0, 0, 0, 1, 0],
            [0, 0, 1, 1, 0]
        ])
    ).toBe(0);
});

test(`5x5 board with non-matching testCrowns 3x5`, () => {
    expect(
        kingDomino(testBoard, [
            [0, 0, 0, 0, 0],
            [1, 0, 1, 1, 0],
            [1, 0, 0, 0, 1]
        ])
    ).toBe(0);
});

test(`3x5 board with non-matching testCrowns 5x5`, () => {
    expect(
        kingDomino(
            [
                [`S`, `S`, `S`, `L`, `L`],
                [`S`, `W`, `W`, `W`, `L`],
                [`L`, `W`, `K`, `W`, `L`]
            ],
            testCrowns
        )
    ).toBe(0);
});

test(`testBoard contains both upper and lowercase letters`, () => {
    expect(
        kingDomino(
            [
                [`s`, `S`, `s`, `L`, `L`],
                [`S`, `W`, `w`, `W`, `l`],
                [`L`, `w`, `k`, `w`, `L`],
                [`F`, `W`, `W`, `f`, `F`],
                [`F`, `f`, `F`, `F`, `L`]
            ],
            testCrowns
        )
    ).toBe(44);
});

test(`testBoard contains numbers and letters`, () => {
    expect(kingDomino([[`K`, `1`, 4, `S`, `L`]], [[0, 0, 1, 1, 0]])).toBe(0);
});

test(`testCrowns contains strings of numbers and/or letters`, () => {
    expect(kingDomino([[`S`, `s`, `L`, `l`, `W`]], [[1, `0`, 0, `S`, 1]])).toBe(
        0
    );
});

// test(`bigBoard and bigCrowns`, () => {
//     expect(kingDomino(bigBoard, bigCrowns)).toBe(44);
// });
