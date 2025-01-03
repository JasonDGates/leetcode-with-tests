// Vitest test cases
import { describe, it, expect } from 'vitest';

describe('carFleet', () => {
  it('should return the correct number of fleets for example 1', () => {
    const target = 10;
    const position = [1, 4];
    const speed = [3, 2];
    expect(carFleet(target, position, speed)).toBe(1);
  });

  it('should return the correct number of fleets for example 2', () => {
    const target = 10;
    const position = [4, 1, 0, 7];
    const speed = [2, 2, 1, 1];
    expect(carFleet(target, position, speed)).toBe(3);
  });

  it('should return 0 fleets when there are no cars', () => {
    const target = 10;
    const position = [];
    const speed = [];
    expect(carFleet(target, position, speed)).toBe(0);
  });

  it('should handle a single car as one fleet', () => {
    const target = 100;
    const position = [10];
    const speed = [5];
    expect(carFleet(target, position, speed)).toBe(1);
  });

  it('should handle cars that never catch up', () => {
    const target = 15;
    const position = [0, 5, 10];
    const speed = [1, 1, 1];
    expect(carFleet(target, position, speed)).toBe(3);
  });

  it('should handle cars that catch up to form one fleet', () => {
    const target = 12;
    const position = [10, 8, 0, 5, 3];
    const speed = [2, 4, 1, 1, 3];
    expect(carFleet(target, position, speed)).toBe(3);
  });
});
