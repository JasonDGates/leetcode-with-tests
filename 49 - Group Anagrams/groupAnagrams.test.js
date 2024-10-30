// groupAnagrams.test.js
import { describe, it, expect } from 'vitest';
import groupAnagrams from './groupAnagrams';

describe('groupAnagrams', () => {
  it('should group anagrams correctly for a basic example', () => {
    const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
    const result = groupAnagrams(strs);

    // Expected output (order of groups or elements within each group doesn't matter)
    const expected = [["bat"], ["nat", "tan"], ["eat", "tea", "ate"]];

    // Sort each group to ignore ordering within groups
    const sortedResult = result.map(group => group.sort());
    const sortedExpected = expected.map(group => group.sort());

    // Check if sorted groups match regardless of order
    expect(sortedResult).toEqual(expect.arrayContaining(sortedExpected));
  });

  it('should return single empty string in a group if input has one empty string', () => {
    const strs = [""];
    const result = groupAnagrams(strs);
    expect(result).toEqual([[""]]);
  });

  it('should return a single group if input has one character', () => {
    const strs = ["a"];
    const result = groupAnagrams(strs);
    expect(result).toEqual([["a"]]);
  });

  it('should handle input with multiple empty strings', () => {
    const strs = ["", "", ""];
    const result = groupAnagrams(strs);
    expect(result).toEqual([["", "", ""]]);
  });

  it('should group multiple sets of anagrams correctly', () => {
    const strs = ["abc", "bca", "cab", "xyz", "zyx"];
    const result = groupAnagrams(strs);
    const expected = [["abc", "bca", "cab"], ["xyz", "zyx"]];

    // Sort each group to ignore ordering within groups
    const sortedResult = result.map(group => group.sort());
    const sortedExpected = expected.map(group => group.sort());

    expect(sortedResult).toEqual(expect.arrayContaining(sortedExpected));
  });

  it('should handle non-anagram words as individual groups', () => {
    const strs = ["one", "two", "three"];
    const result = groupAnagrams(strs);
    expect(result).toEqual(expect.arrayContaining([["one"], ["two"], ["three"]]));
  });

  it('should handle large number of single-character strings', () => {
    const strs = Array(10000).fill("a");
    const result = groupAnagrams(strs);
    expect(result).toEqual([Array(10000).fill("a")]);
  });
});
