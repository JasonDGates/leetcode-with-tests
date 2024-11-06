/**
 * Checks if the given string is a palindrome, ignoring case and non-alphanumeric characters.
 * 
 * @param {string} s - The input string.
 * @returns {boolean} - True if s is a palindrome, false otherwise.
 * 
 * Time Complexity: O(n) - We process each character once to filter and check.
 * Space Complexity: O(n) - For storing the filtered characters.
 */
function isPalindrome(s) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleaned = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
    // Use two pointers to check if the cleaned string is a palindrome
    let left = 0;
    let right = cleaned.length - 1;
  
    while (left < right) {
      if (cleaned[left] !== cleaned[right]) {
        return false;
      }
      left++;
      right--;
    }
  
    return true;
  }
  
  export default isPalindrome;
  