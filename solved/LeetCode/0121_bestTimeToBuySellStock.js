/*
LeetCode #121

You are given an array prices where prices[i] is the price of a
given stock on the i^th day.

You want to maximize your profit by choosing a single day to buy one
stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction.
If you cannot achieve any profit, return 0.

Exmaple 1:
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6),
profit is 6-1 = 5. You cannot sell on a day that has passed.

Example 2:
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
*/

const maxProfit = (prices) => {
    let minimum = Number.MAX_VALUE;
    let profit = 0;

    for (let i = 0; i < prices.length; ++i) {
        if (prices[i] < minimum) {
            minimum = prices[i];
        } else if (prices[i] - minimum > profit) {
            profit = prices[i] - minimum;
        }
    }
    return profit;
};

maxProfit([7, 1, 5, 3, 6, 4]); // 5

// 185ms, faster than 6.76% of js submissions
// 48.6mb, less than 77.08% of js submissions
