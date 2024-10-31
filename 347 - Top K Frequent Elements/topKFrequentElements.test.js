// topKFrequentElements.test.js
import { describe, it, expect } from 'vitest';
import topKFrequentElements from './topKFrequentElements';

describe('topKFrequentElements', () => {
  it('should return the top k frequent elements for a simple case', () => {
    const nums = [1, 1, 1, 2, 2, 3];
    const k = 2;
    const result = topKFrequentElements(nums, k);
    expect(result).toEqual(expect.arrayContaining([1, 2]));
  });

  it('should return the single element if k is 1', () => {
    const nums = [1];
    const k = 1;
    const result = topKFrequentElements(nums, k);
    expect(result).toEqual([1]);
  });

  it('should handle a larger array with varying frequencies', () => {
    const nums = [4, 4, 4, 5, 5, 6];
    const k = 2;
    const result = topKFrequentElements(nums, k);
    expect(result).toEqual(expect.arrayContaining([4, 5]));
  });

  it('should return all unique elements if k equals the number of unique elements', () => {
    const nums = [1, 2, 3, 4, 5];
    const k = 5;
    const result = topKFrequentElements(nums, k);
    expect(result).toEqual(expect.arrayContaining([1, 2, 3, 4, 5]));
  });

  it('should handle negative numbers and return top k frequent', () => {
    const nums = [-1, -1, -2, -2, -2, -3];
    const k = 2;
    const result = topKFrequentElements(nums, k);
    expect(result).toEqual(expect.arrayContaining([-2, -1]));
  });

  it('should handle case with multiple elements having the same frequency', () => {
    const nums = [1, 2, 3, 3, 2, 1];
    const k = 2;
    const result = topKFrequentElements(nums, k);
  
    // Since all elements have the same frequency, any two of [1, 2, 3] are valid
    expect([[1, 2], [1, 3], [2, 3]]).toContainEqual(result.sort());
  });
  
});
