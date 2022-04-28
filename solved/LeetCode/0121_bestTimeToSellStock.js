/*

*/

const maxProfit = (prices) => {
    let profit = 0;
    let p1 = 0;
    let p2 = 1;

    while (p2 < prices.length) {
        if (prices[p1] < prices[p2]) {
            profit = Math.max(profit, prices[p2] - prices[p1]);
        } else {
            p1 = p2;
        }
        ++p2;
    }
    return profit;
};

maxProfit([7, 1, 5, 3, 6, 4]); // 5

// 85ms, faster than 83.90% of js submissions
// 52mb, less than 35.86% of js submissions
// 2 pointers, O(n) time, O(1) space
