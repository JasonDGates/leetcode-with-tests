/**
 * Finds indices of two numbers in the array that add up to a target sum.
 *
 * @param {number[]} nums - The array of integers.
 * @param {number} target - The target sum.
 * @returns {number[]} - An array containing the indices of the two numbers.
 *
 * Time Complexity: O(n), where n is the length of nums.
 * - We iterate through the array once, and each lookup or insertion in the map is O(1) on average.
 *
 * Space Complexity: O(n), where n is the length of nums.
 * - We store up to n elements in the hash map.
 */
function twoSum(nums, target) {
    const map = new Map(); // Stores number as key and its index as value
  
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
  
      if (map.has(complement)) {
        return [map.get(complement), i]; // Found the two indices
      }
  
      map.set(nums[i], i); // Add current number to map
    }
  
    throw new Error("No two sum solution"); // Given constraints guarantee a solution
  }
  
  export default twoSum;
  