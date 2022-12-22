/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  // Track Max Water // 16
  let maxWater = 0;
  let p1 = 0;
  let p2 = 1;
  let maxHeightPointer = 0;

  while (p2 < height.length) {
      const currentWaterSection = (p2 - p1) * Math.min(height[p1], height[p2]);
      const currentWaterTotal = (p2 - maxHeightPointer) * Math.min(height[p1], height[maxHeightPointer]);

      if (height[p2] >= height[p1]) {
          if (currentWaterSection > maxWater) maxWater = currentWaterSection;
          p1 = p2;
          maxHeightPointer = Math.min(p1, p2);
          p2++;
          continue;
      }

      // Checking each block until height[p2] is >= height[p1]
      if (height[p2] < height[p1] && currentWaterSection > maxWater) {
          maxWater = currentWaterSection;
          p2++
          continue;
      }

      if (height[p2] < height[maxHeightPointer] && currentWaterTotal > maxWater) {
          maxWater = currentWaterTotal;
          p2++;
          continue;
      }
      // If the above is not true, we still need to move p2
      // We might have to move this later though
      p2++;
  }

  return maxWater;
};

module.exports = maxArea;