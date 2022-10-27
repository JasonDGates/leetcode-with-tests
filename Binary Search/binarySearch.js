var binarySearch = function(nums, target) {

  let helper = function(nums, target, mid) {
      if (target === nums[mid]) {
          return mid;
      }
  }

  return helper() || -1;
};

module.exports = binarySearch;