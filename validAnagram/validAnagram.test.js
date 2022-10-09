const validAnagram = require('./validAnagram')

test('"anagram" and "nagaram" should be true', () => {
  expect(validAnagram('anagram', 'nagaram')).toBe(true);
});

test('"rat" and "car" should be false', () => {
  expect(validAnagram('rat', 'car')).toBe(false);
});