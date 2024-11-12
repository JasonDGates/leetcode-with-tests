// maxWaterContainer.test.js
import { describe, it, expect } from 'vitest';
import maxWaterContainer from './maxWaterContainer';

describe('maxWaterContainer', () => {
  it('should return 36 for height = [1, 7, 2, 5, 4, 7, 3, 6]', () => {
    const height = [1, 7, 2, 5, 4, 7, 3, 6];
    const result = maxWaterContainer(height);
    expect(result).toEqual(36);
  });

  it('should return 4 for height = [2, 2, 2]', () => {
    const height = [2, 2, 2];
    const result = maxWaterContainer(height);
    expect(result).toEqual(4);
  });

  it('should handle edge case of two bars correctly', () => {
    const height = [1, 2];
    const result = maxWaterContainer(height);
    expect(result).toEqual(1);
  });

  it('should handle a case with heights in ascending order', () => {
    const height = [1, 2, 3, 4, 5];
    const result = maxWaterContainer(height);
    expect(result).toEqual(6);
  });

  it('should handle a case with heights in descending order', () => {
    const height = [5, 4, 3, 2, 1];
    const result = maxWaterContainer(height);
    expect(result).toEqual(6);
  });
});
