// maxWaterContainer.js
export default function maxWaterContainer(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;
  
    while (left < right) {
      const width = right - left;
      const currentArea = Math.min(height[left], height[right]) * width;
      maxArea = Math.max(maxArea, currentArea);
  
      // Move the pointer with the shorter height
      if (height[left] < height[right]) {
        left++;
      } else {
        right--;
      }
    }
  
    return maxArea;
  }
  