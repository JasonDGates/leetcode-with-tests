import { describe, it, expect } from "vitest";
import dailyTemperatures from "./dailyTemperatures";

describe("Daily Temperatures", () => {
  it("should return correct results for example 1", () => {
    const temperatures = [30, 38, 30, 36, 35, 40, 28];
    const expected = [1, 4, 1, 2, 1, 0, 0];
    const result = dailyTemperatures(temperatures);
    expect(result).toEqual(expected);
  });

  it("should return correct results for example 2", () => {
    const temperatures = [22, 21, 20];
    const expected = [0, 0, 0];
    const result = dailyTemperatures(temperatures);
    expect(result).toEqual(expected);
  });

  it("should handle a single element", () => {
    const temperatures = [50];
    const expected = [0];
    const result = dailyTemperatures(temperatures);
    expect(result).toEqual(expected);
  });

  it("should handle strictly increasing temperatures", () => {
    const temperatures = [30, 31, 32, 33, 34];
    const expected = [1, 1, 1, 1, 0];
    const result = dailyTemperatures(temperatures);
    expect(result).toEqual(expected);
  });

  it("should handle strictly decreasing temperatures", () => {
    const temperatures = [34, 33, 32, 31, 30];
    const expected = [0, 0, 0, 0, 0];
    const result = dailyTemperatures(temperatures);
    expect(result).toEqual(expected);
  });

  it("should handle alternating temperatures", () => {
    const temperatures = [30, 40, 30, 40, 30];
    const expected = [1, 0, 1, 0, 0];
    const result = dailyTemperatures(temperatures);
    expect(result).toEqual(expected);
  });
});
