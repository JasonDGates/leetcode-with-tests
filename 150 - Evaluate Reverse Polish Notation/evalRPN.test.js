import { describe, it, expect } from 'vitest';
import { evalRPN } from './evalRPN';

describe('Evaluate Reverse Polish Notation', () => {
  it('should evaluate addition, multiplication, and subtraction', () => {
    const tokens = ["1","2","+","3","*","4","-"];
    expect(evalRPN(tokens)).toBe(5);
  });

  it('should handle single number tokens', () => {
    const tokens = ["42"];
    expect(evalRPN(tokens)).toBe(42);
  });

  it('should evaluate with all operators', () => {
    const tokens = ["4","13","5","/","+"];
    expect(evalRPN(tokens)).toBe(6);
  });

  it('should handle negative numbers correctly', () => {
    const tokens = ["-2","3","*"];
    expect(evalRPN(tokens)).toBe(-6);
  });

  it('should handle integer division truncating towards zero', () => {
    const tokens = ["10","3","/"];
    expect(evalRPN(tokens)).toBe(3); // Truncate 10/3 toward zero
  });
});
