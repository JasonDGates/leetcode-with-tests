import { describe, it, expect } from "vitest";

describe("Generate Parentheses", () => {
  const solution = new Solution();

  it("should generate parentheses for n = 1", () => {
    const n = 1;
    const expected = ["()"];
    const result = solution.generateParentheses(n);
    expect(result).toEqual(expected);
  });

  it("should generate parentheses for n = 2", () => {
    const n = 2;
    const expected = ["(())", "()()"];
    const result = solution.generateParentheses(n).sort();
    expect(result).toEqual(expected.sort());
  });

  it("should generate parentheses for n = 3", () => {
    const n = 3;
    const expected = ["((()))", "(()())", "(())()", "()(())", "()()()"];
    const result = solution.generateParentheses(n).sort();
    expect(result).toEqual(expected.sort());
  });

  it("should generate parentheses for n = 4", () => {
    const n = 4;
    const result = solution.generateParentheses(n);
    expect(result).toContain("(((())))");
    expect(result).toContain("()()()()");
    expect(result.length).toBe(14); // There are exactly 14 combinations for n = 4
  });
});
