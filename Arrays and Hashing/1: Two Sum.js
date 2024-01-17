// https://leetcode.com/problems/two-sum/description/

const twoSum = (array, target) => {
    // Time Complexity: O(n) where n = the length of the input array
    // Space Complexity: O(n) where n = the length of the input array
    const hashMap = {}
    for (let i = 0; i < array.length; i++) {
        const current = array[i]
        const diff = target - current
        if (hashMap[diff] !== undefined) {
            return [hashMap[diff], i]
        }
        hashMap[current] = i
    }
}