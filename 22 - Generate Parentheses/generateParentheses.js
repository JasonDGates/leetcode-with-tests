class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParentheses(n) {
      const result = [];
      this.backtrack(result, "", 0, 0, n);
      return result;
    }
  
    /**
     * Backtracking helper function
     * @param {string[]} result
     * @param {string} current
     * @param {number} open
     * @param {number} close
     * @param {number} max
     */
    backtrack(result, current, open, close, max) {
      if (current.length === max * 2) {
        result.push(current);
        return;
      }
  
      if (open < max) {
        this.backtrack(result, current + "(", open + 1, close, max);
      }
  
      if (close < open) {
        this.backtrack(result, current + ")", open, close + 1, max);
      }
    }
  }
  