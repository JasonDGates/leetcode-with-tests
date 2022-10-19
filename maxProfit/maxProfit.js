/**
 * @param {number[]} prices
 * @return {number}
 */
 const maxProfit = function(prices) {
  let profit = 0;
  let leftP = 0;
  let rightP = 1;

  while (rightP < prices.length) {
      if (prices[leftP] > prices[rightP]) {
          leftP = rightP;
          rightP++;
          continue;
      }
      if (prices[rightP] - prices[leftP] > profit) {
          profit = prices[rightP] - prices[leftP];
          rightP++;
          continue;
      }
      rightP++;
  }

  return profit
};

module.exports = maxProfit;
// Time Complexity O(n)
// Space Complexity O(1)
// n = prices.length