/**
 * Determines if two strings are anagrams of each other.
 *
 * @param {string} s - The first string.
 * @param {string} t - The second string.
 * @returns {boolean} - Returns true if t is an anagram of s, otherwise false.
 *
 * Time Complexity: O(n), where n is the length of s or t.
 * - We count characters in both strings, which involves a single pass through each string.
 *
 * Space Complexity: O(n), where n is the length of s or t.
 * - We use extra space for the character count hash map.
 */
function validAnagram(s, t) {
    if (s.length !== t.length) return false; // Early exit if lengths differ
  
    const charCount = {};
  
    // Count each character in s
    for (const char of s) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
  
    // Subtract each character count using t
    for (const char of t) {
      if (!charCount[char]) return false; // Character not in s or used too many times
      charCount[char] -= 1;
      if (charCount[char] < 0) return false;
    }
  
    return true; // All counts balanced
  }
  
  export default validAnagram;
  