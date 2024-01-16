// https://leetcode.com/problems/contains-duplicate/description/

const containsDuplicate = (numbers) => {
    // O(n) Time Complexity for creating a set
    // O(n) Space Complexity for storing the set
    const set = new Set(numbers);
    return numbers.length !== set.size;
};