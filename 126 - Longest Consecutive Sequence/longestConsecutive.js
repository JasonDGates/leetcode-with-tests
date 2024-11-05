/**
 * Finds the length of the longest consecutive elements sequence.
 * 
 * @param {number[]} nums - The unsorted array of integers.
 * @returns {number} - The length of the longest consecutive sequence.
 * 
 * Time Complexity: O(n) - Each number is visited once.
 * Space Complexity: O(n) - Set stores up to all elements of nums.
 */
function longestConsecutive(nums) {
    const numSet = new Set(nums);
    let longestStreak = 0;
  
    for (const num of numSet) {
      // Check if `num` is the start of a sequence
      if (!numSet.has(num - 1)) {
        let currentNum = num;
        let currentStreak = 1;
  
        // Count the length of the consecutive sequence
        while (numSet.has(currentNum + 1)) {
          currentNum += 1;
          currentStreak += 1;
        }
  
        longestStreak = Math.max(longestStreak, currentStreak);
      }
    }
  
    return longestStreak;
  }
  
  export default longestConsecutive;
  