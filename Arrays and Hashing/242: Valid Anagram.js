// https://leetcode.com/problems/valid-anagram/description/

const isAnagram = (input1, input2) => {
    // O(n) Time complexity where n = input1.length
    // O(1) Space Complexity for the array map
    
    if (input1.length !== input2.length) return false

    const map = Array(26).fill(0)
    aCharCode = "a".charCodeAt(0);

    for (let i = 0; i < input1.length; i++) {
       map[input1.charCodeAt(i) - aCharCode]++;
       map[input2.charCodeAt(i) - aCharCode]--;
    }

    return map.every(charCount => charCount === 0)
};