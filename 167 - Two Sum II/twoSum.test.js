// twoSum.test.js
import { describe, it, expect } from 'vitest';
import twoSum from './twoSum';

describe('twoSum', () => {
  it('should return [1, 2] for numbers = [1, 2, 3, 4] and target = 3', () => {
    const numbers = [1, 2, 3, 4];
    const target = 3;
    expect(twoSum(numbers, target)).toEqual([1, 2]);
  });

  it('should return [2, 3] for numbers = [1, 2, 3, 4, 5] and target = 5', () => {
    const numbers = [1, 2, 3, 4, 5];
    const target = 5;
    expect(twoSum(numbers, target)).toEqual([2, 3]);
  });

  it('should return [3, 5] for numbers = [-3, 1, 4, 5, 9] and target = 13', () => {
    const numbers = [-3, 1, 4, 5, 9];
    const target = 13;
    expect(twoSum(numbers, target)).toEqual([3, 5]);
  });

  it('should return [1, 4] for numbers = [-1000, -500, 0, 500, 1000] and target = 0', () => {
    const numbers = [-1000, -500, 0, 500, 1000];
    const target = 0;
    expect(twoSum(numbers, target)).toEqual([1, 4]);
  });

  it('should handle large numbers and target correctly', () => {
    const numbers = [100, 150, 200, 250, 300];
    const target = 450;
    expect(twoSum(numbers, target)).toEqual([2, 5]);
  });
});
