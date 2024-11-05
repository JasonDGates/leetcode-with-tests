// longestConsecutive.test.js
import { describe, it, expect } from 'vitest';
import longestConsecutive from './longestConsecutive';

describe('longestConsecutive', () => {
  it('should return 4 for sequence [100, 4, 200, 1, 3, 2]', () => {
    const nums = [100, 4, 200, 1, 3, 2];
    expect(longestConsecutive(nums)).toBe(4);
  });

  it('should return 9 for sequence [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]', () => {
    const nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
    expect(longestConsecutive(nums)).toBe(9);
  });

  it('should return 1 for sequence with one element [1]', () => {
    const nums = [1];
    expect(longestConsecutive(nums)).toBe(1);
  });

  it('should return 0 for an empty array', () => {
    const nums = [];
    expect(longestConsecutive(nums)).toBe(0);
  });

  it('should handle an array with duplicates correctly', () => {
    const nums = [1, 2, 2, 3, 4];
    expect(longestConsecutive(nums)).toBe(4);
  });

  it('should handle an array with negative numbers', () => {
    const nums = [-1, -2, -3, -4, 0, 1, 2, 3, 4];
    expect(longestConsecutive(nums)).toBe(9);
  });
});
