// threeSum.test.js
import { describe, it, expect } from 'vitest';
import threeSum from './threeSum';

describe('threeSum', () => {
  it('should return [[-1, -1, 2], [-1, 0, 1]] for nums = [-1, 0, 1, 2, -1, -4]', () => {
    const nums = [-1, 0, 1, 2, -1, -4];
    const result = threeSum(nums);
    expect(result).toEqual([[-1, -1, 2], [-1, 0, 1]]);
  });

  it('should return [] for nums = [0, 1, 1]', () => {
    const nums = [0, 1, 1];
    const result = threeSum(nums);
    expect(result).toEqual([]);
  });

  it('should return [[0, 0, 0]] for nums = [0, 0, 0]', () => {
    const nums = [0, 0, 0];
    const result = threeSum(nums);
    expect(result).toEqual([[0, 0, 0]]);
  });

  it('should handle larger input correctly', () => {
    const nums = [-2, 0, 1, 1, 2];
    const result = threeSum(nums);
    expect(result).toEqual([[-2, 0, 2], [-2, 1, 1]]);
  });
});
