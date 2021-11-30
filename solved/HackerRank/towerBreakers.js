/*
HackerRank Tower Breakers
*/

const towerBreakers = (n, m) => {
    // if the tower height is 1, player 2 wins
    // because player 1 cannot make a move
    if (m === 1) {
        return 2;
    }

    // if the number of towers is even, player 2
    // will always win. otherwise player 1 wins.
    if (n % 2 === 0) {
        return 2;
    } else {
        return 1;
    }
};

towerBreakers(2, 2); // 2
towerBreakers(1, 4); // 1
