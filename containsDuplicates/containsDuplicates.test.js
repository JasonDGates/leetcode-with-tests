const containsDuplicates = require('./containsDuplicates');

test('[1,2,3,1] should be true', () => {
  expect(containsDuplicates([1,2,3,1])).toBe(true);
});

test('[1,2,3,4] should be false', () => {
  expect(containsDuplicates([1,2,3,4])).toBe(false);
});

test('[1,1,1,3,3,4,3,2,4,2] should be true', () => {
  expect(containsDuplicates([1,1,1,3,3,4,3,2,4,2])).toBe(true);
});
