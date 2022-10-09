/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true


Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
*/
function containsDuplicates(array) {
  // Time: O(n) where n is the size of array || new Set() is TC O(n)
  // Space: O(n) where n is the size of array || We are making a new Set the same size as array.
  const newSet = new Set(array);
  return !(array.length === newSet.size)
}
module.exports = containsDuplicates;
