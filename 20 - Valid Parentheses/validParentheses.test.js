// validParentheses.test.js
import { describe, it, expect } from 'vitest';
import validParentheses from './validParentheses';

describe('validParentheses', () => {
  it('should return true for s = "[]"', () => {
    expect(validParentheses("[]")).toEqual(true);
  });

  it('should return true for s = "([{}])"', () => {
    expect(validParentheses("([{}])")).toEqual(true);
  });

  it('should return false for s = "[(])"', () => {
    expect(validParentheses("[(])")).toEqual(false);
  });

  it('should return false for s = "["', () => {
    expect(validParentheses("[")).toEqual(false);
  });

  it('should return true for s = "" (empty string)', () => {
    expect(validParentheses("")).toEqual(true);
  });

  it('should handle a large input string with multiple valid pairs', () => {
    const s = "([]){}([]){}" + "({[]})".repeat(100); // Valid large input
    expect(validParentheses(s)).toEqual(true);
  });
});
