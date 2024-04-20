/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    // Time Complexity is O(n) where n is the length of nums
    // creating a new set is O(n) where n is the length of nums
    // Space Complexity is O(n) where n is the length of nums
    const set = new Set(nums)
    let result = 0;
    
    // Time Complexity is O(n) where n is the length of nums
    // We only have to iterate over the set once
    for (const num of set) {
        //Time Complexity of set.has is O(1)
        if (!set.has(num - 1)) {
            let i = 1;
            while(set.has(num + i)) {
                i++;
            }
            if (i > result) result = i;
        }
    }
    
    // Time Complexity O(n)
    // Space Complexity O(n)
    // where n is the length of nums
    return result;
};
