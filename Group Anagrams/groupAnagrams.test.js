const groupAnagrams = require('./groupAnagrams');

describe('groupAnagrams', () => {
  test('["eat","tea","tan","ate","nat","bat"] should be false', () => {
    expect(groupAnagrams(["eat","tea","tan","ate","nat","bat"])).toBe([["bat"],["nat","tan"],["ate","eat","tea"]]);
  });
  // test('Empty Array', () => {
  //   expect(groupAnagrams([""])).toStrictEqual([[""]]);
  // })
})