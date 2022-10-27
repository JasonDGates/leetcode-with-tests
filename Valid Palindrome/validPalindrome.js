/**
 * @param {string} s
 * @return {boolean}
 */
 const isPalindrome = function(string) {
  const newStr = string.toLowerCase().replace(/[^a-z0-9]/gi, '');
  let leftP = 0;
  let rightP = newStr.length - 1;

  while(rightP - leftP > 0) {
      if (newStr[rightP] !== newStr[leftP]) {
          return false;
      }
      rightP--;
      leftP++;
  }
  return true;
};

module.exports = isPalindrome;
// Time complexity: O(n)
// n = string.length
// technically it would be O(3n) since .toLowerCase and .replace are both O(n) and then the while loop is another O(n) but since we ignore the 3 before n its just O(n)
// Space complexity: O(1)