// isPalindrome.test.js
import { describe, it, expect } from 'vitest';
import isPalindrome from './validPalindrome';

describe('isPalindrome', () => {
  it('should return true for "A man, a plan, a canal: Panama"', () => {
    const s = "A man, a plan, a canal: Panama";
    expect(isPalindrome(s)).toBe(true);
  });

  it('should return false for "race a car"', () => {
    const s = "race a car";
    expect(isPalindrome(s)).toBe(false);
  });

  it('should return true for an empty string " "', () => {
    const s = " ";
    expect(isPalindrome(s)).toBe(true);
  });

  it('should return true for "0P0"', () => {
    const s = "0P0";
    expect(isPalindrome(s)).toBe(true);
  });

  it('should handle a string with only non-alphanumeric characters "!@#$"', () => {
    const s = "!@#$";
    expect(isPalindrome(s)).toBe(true);
  });

  it('should handle case with mixed alphanumeric characters and punctuation "Madam, in Eden, I’m Adam!"', () => {
    const s = "Madam, in Eden, I’m Adam!";
    expect(isPalindrome(s)).toBe(true);
  });
});
