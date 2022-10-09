const containsDuplicates = require('./containsDuplicates');

test('[1,2,3,1] should be true', () => {
  expect(containsDuplicates([1,2,3,1])).toBe(true);
});
