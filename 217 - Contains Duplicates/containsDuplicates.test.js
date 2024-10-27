// duplicateInteger.test.js
import { describe, it, expect } from 'vitest';
import containsDuplicate from './containsDuplicates';

describe('containsDuplicate', () => {
  it('should return true when there is a duplicate integer', () => {
    expect(containsDuplicate([1, 2, 3, 3])).toBe(true);
  });

  it('should return false when there are no duplicates', () => {
    expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
  });

  it('should return false for an empty array', () => {
    expect(containsDuplicate([])).toBe(false);
  });

  it('should return true when all elements are the same', () => {
    expect(containsDuplicate([5, 5, 5, 5])).toBe(true);
  });

  it('should handle a large array with no duplicates', () => {
    const largeArray = Array.from({ length: 10000 }, (_, i) => i);
    expect(containsDuplicate(largeArray)).toBe(false);
  });

  it('should handle a large array with one duplicate', () => {
    const largeArrayWithDuplicate = Array.from({ length: 9999 }, (_, i) => i).concat([1]);
    expect(containsDuplicate(largeArrayWithDuplicate)).toBe(true);
  });

  it('should return true for a simple case with duplicates at the start and end', () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
  });

  it('should return false for an array with a single element', () => {
    expect(containsDuplicate([42])).toBe(false);
  });

  it('should handle negative numbers with duplicates', () => {
    expect(containsDuplicate([-1, -2, -3, -1])).toBe(true);
  });

  it('should handle negative numbers with no duplicates', () => {
    expect(containsDuplicate([-1, -2, -3, -4])).toBe(false);
  });
});
