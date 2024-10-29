// twoSum.test.js
import { describe, it, expect } from 'vitest';
import twoSum from './twoSum';

describe('twoSum', () => {
  it('should return correct indices for a basic example', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  it('should return indices in any order for valid pair', () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });

  it('should work when the same element is used twice', () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });

  it('should handle negative numbers and mixed values', () => {
    expect(twoSum([-1, -2, -3, -4, 5], 1)).toEqual([3, 4]);
  });

  it('should handle large numbers and large target', () => {
    expect(twoSum([1000000000, 2000000000, 3000000000], 5000000000)).toEqual([1, 2]);
  });

  it('should return the correct indices even if the numbers repeat but are not used in solution', () => {
    expect(twoSum([1, 1, 2, 3], 5)).toEqual([2, 3]);
  });

  it('should handle edge case of smallest array length', () => {
    expect(twoSum([1, 2], 3)).toEqual([0, 1]);
  });

  it('should throw an error if no solution is found (not applicable here but for robustness)', () => {
    expect(() => twoSum([1, 2, 3], 7)).toThrow("No two sum solution");
  });
});
