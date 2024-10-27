/**
 * https://leetcode.com/problems/contains-duplicate/description/
 * Optimized function to check if an array contains any duplicate values.
 * 
 * @param {number[]} nums - The array of integers to check.
 * @returns {boolean} - Returns true if there is at least one duplicate, otherwise false.
 *
 * Time Complexity: O(n) average case, where n is the length of the array.
 * - The loop can terminate early if a duplicate is found before reaching the end.
 *
 * Space Complexity: O(n), where n is the length of the array.
 * - In the worst case, all elements are unique, and we store each one in the set.
 */
function containsDuplicate(nums) {
  const numSet = new Set();

  for (const num of nums) {
    if (numSet.has(num)) return true; // Early exit if duplicate found
    numSet.add(num);
  }

  return false; // No duplicates found
}

export default containsDuplicate;
