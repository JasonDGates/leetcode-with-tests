const maxArea = require('./maxArea');

describe('maxArea', () => {
  test('[1, 8, 6, 2, 5, 4, 8, 3, 7] should be 49' , () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
  });
})