/**
 * Finds the k most frequent elements in an array.
 * 
 * @param {number[]} nums - The array of numbers.
 * @param {number} k - The number of top frequent elements to return.
 * @returns {number[]} - The k most frequent elements.
 * 
 * Time Complexity: O(n log k), where n is the length of the nums array.
 * - We iterate over nums once to populate the frequency map.
 * - Inserting into and extracting from the heap takes O(log k) time.
 * 
 * Space Complexity: O(n), where n is the number of unique elements in nums.
 * - We store all unique elements in the frequency map.
 */
function topKFrequentElements(nums, k) {
    const frequencyMap = new Map();
    
    // Step 1: Build the frequency map
    for (const num of nums) {
      frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }
    
    // Step 2: Use a min-heap to keep track of the top k frequent elements
    const minHeap = [];
    for (const [num, freq] of frequencyMap.entries()) {
      if (minHeap.length < k) {
        minHeap.push([num, freq]);
        minHeap.sort((a, b) => a[1] - b[1]);
      } else if (freq > minHeap[0][1]) {
        minHeap.shift();  // Remove the smallest frequency element
        minHeap.push([num, freq]);
        minHeap.sort((a, b) => a[1] - b[1]);
      }
    }
    
    // Extract the elements from the heap
    return minHeap.map(([num]) => num);
  }
  
  export default topKFrequentElements;
  