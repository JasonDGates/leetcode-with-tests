const containsDuplicates = require('./containsDuplicates');

test('[1,2,3,1] should be true', () => {
  expect(containsDuplicates([1,2,3,1])).toBe(true);
});

test('[1,2,3,4] should be false', () => {
  expect(containsDuplicates([1,2,3,4])).toBe(false);
});
