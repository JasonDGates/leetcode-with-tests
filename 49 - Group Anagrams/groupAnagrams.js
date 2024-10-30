/**
 * Groups anagrams together from an array of strings.
 *
 * @param {string[]} strs - The array of strings to group.
 * @returns {string[][]} - An array of arrays, where each subarray contains grouped anagrams.
 *
 * Time Complexity: O(n * k log k), where n is the number of strings in strs and k is the maximum length of a string.
 * - Sorting each string takes O(k log k), and we do this for each of the n strings.
 *
 * Space Complexity: O(n * k), where n is the number of strings and k is the maximum length of a string.
 * - We store all strings in the map, which requires O(n * k) space.
 */
function groupAnagrams(strs) {
    const map = new Map();
  
    for (const str of strs) {
      // Sort each string to get the anagram pattern
      const sortedStr = str.split('').sort().join('');
      
      // Group all anagrams with the same pattern
      if (!map.has(sortedStr)) {
        map.set(sortedStr, []);
      }
      map.get(sortedStr).push(str);
    }
  
    return Array.from(map.values());
  }
  
  export default groupAnagrams;
  