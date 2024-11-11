// threeSum.js
export default function threeSum(nums) {
    const result = [];
    
    // Sort the array to use the two-pointer technique and handle duplicates
    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length - 2; i++) {
      // Skip the same element to avoid duplicates in result
      if (i > 0 && nums[i] === nums[i - 1]) continue;
  
      let left = i + 1;
      let right = nums.length - 1;
  
      while (left < right) {
        const sum = nums[i] + nums[left] + nums[right];
        if (sum === 0) {
          result.push([nums[i], nums[left], nums[right]]);
  
          // Move both pointers and skip duplicates
          while (left < right && nums[left] === nums[left + 1]) left++;
          while (left < right && nums[right] === nums[right - 1]) right--;
          
          left++;
          right--;
        } else if (sum < 0) {
          left++;
        } else {
          right--;
        }
      }
    }
  
    return result;
  }
  