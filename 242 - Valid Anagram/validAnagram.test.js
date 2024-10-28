// validAnagram.test.js
import { describe, it, expect } from 'vitest';
import validAnagram from './validAnagram';

describe('validAnagram', () => {
  it('should return true for valid anagrams with simple lowercase letters', () => {
    expect(validAnagram("anagram", "nagaram")).toBe(true);
  });

  it('should return false for strings of different lengths', () => {
    expect(validAnagram("rat", "car")).toBe(false);
  });

  it('should return false for valid anagrams with different characters', () => {
    expect(validAnagram("hello", "world")).toBe(false);
  });

  it('should return true for anagrams with repeating characters', () => {
    expect(validAnagram("aabbcc", "ccbbaa")).toBe(true);
  });

  it('should return true for anagrams with a single character', () => {
    expect(validAnagram("a", "a")).toBe(true);
  });

  it('should return false for single-character non-anagram strings', () => {
    expect(validAnagram("a", "b")).toBe(false);
  });

  it('should handle edge case of empty strings as true (both are anagrams)', () => {
    expect(validAnagram("", "")).toBe(true);
  });

  it('should return false if one string is empty and the other is not', () => {
    expect(validAnagram("nonempty", "")).toBe(false);
  });

  it('should return true for anagrams with Unicode characters', () => {
    expect(validAnagram("日本語", "語日本")).toBe(true);
  });

  it('should handle anagrams with spaces (should be treated as different characters)', () => {
    expect(validAnagram("listen", "silent ")).toBe(false);
  });

  it('should handle anagrams with uppercase letters as distinct characters from lowercase', () => {
    expect(validAnagram("Hello", "hello")).toBe(false);
  });
});
