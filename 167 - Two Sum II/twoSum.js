/**
 * Finds the indices (1-indexed) of two numbers in a sorted array that add up to the target.
 * 
 * @param {number[]} numbers - Sorted array of integers.
 * @param {number} target - Target sum.
 * @returns {number[]} - Array containing two indices [index1, index2].
 * 
 * Time Complexity: O(n) - We process each element once at most.
 * Space Complexity: O(1) - No additional space is used other than output.
 */
// twoSum.js
// twoSum.js
function twoSum(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
  
    while (left < right) {
      const sum = numbers[left] + numbers[right];
      if (sum === target) {
        return [left + 1, right + 1]; // return indices as 1-based
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
    return [];
  }
  
  
  export default twoSum;
  