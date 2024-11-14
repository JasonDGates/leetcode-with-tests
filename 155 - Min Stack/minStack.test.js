import { describe, it, expect } from 'vitest';
import { MinStack } from './minStack';

describe('MinStack', () => {
  it('should initialize an empty stack', () => {
    const minStack = new MinStack();
    expect(minStack.stack).toEqual([]);
    expect(minStack.minStack).toEqual([]);
  });

  it('should push elements and update minimums correctly', () => {
    const minStack = new MinStack();
    minStack.push(1);
    expect(minStack.getMin()).toBe(1);

    minStack.push(2);
    expect(minStack.getMin()).toBe(1);

    minStack.push(0);
    expect(minStack.getMin()).toBe(0); // 0 is the new minimum
  });

  it('should pop elements and update minimums correctly', () => {
    const minStack = new MinStack();
    minStack.push(1);
    minStack.push(2);
    minStack.push(0);

    minStack.pop();
    expect(minStack.getMin()).toBe(1); // 1 is the minimum after popping 0

    minStack.pop();
    expect(minStack.getMin()).toBe(1); // Minimum remains 1
  });

  it('should retrieve the top element correctly', () => {
    const minStack = new MinStack();
    minStack.push(1);
    minStack.push(2);
    expect(minStack.top()).toBe(2);

    minStack.pop();
    expect(minStack.top()).toBe(1); // Top is 1 after popping 2
  });

  it('should handle multiple push and pop operations correctly', () => {
    const minStack = new MinStack();
    minStack.push(5);
    minStack.push(3);
    minStack.push(4);
    minStack.push(2);

    expect(minStack.getMin()).toBe(2);

    minStack.pop();
    expect(minStack.getMin()).toBe(3);

    minStack.pop();
    expect(minStack.getMin()).toBe(3);

    minStack.pop();
    expect(minStack.getMin()).toBe(5);
  });

  it('should handle edge case with all elements the same', () => {
    const minStack = new MinStack();
    minStack.push(2);
    minStack.push(2);
    minStack.push(2);

    expect(minStack.getMin()).toBe(2);

    minStack.pop();
    expect(minStack.getMin()).toBe(2);

    minStack.pop();
    expect(minStack.getMin()).toBe(2);

    minStack.pop();
    expect(minStack.stack).toEqual([]);
  });
});
