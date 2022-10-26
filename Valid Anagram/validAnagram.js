const validAnagram = function(string1, string2) {
    // if the strings are different lengths, they are not anagrams.
    if (string1.length !== string2.length) return false;

    // Instantiate a new map
    var map = new Map();

    // Iterate over string1
    for (let letter of string1) {
        // Set the letter in the map with a value of 1, or +1 if it already exists
        map.set(letter, map.get(letter) + 1 || 1)
    }

    // Iterate over string2
    for (let letter of string2) {
        // If the letter is not present in the map, return false;
        if (map.get(letter) == false || map.get(letter) == undefined) {
            return false;
        }
        // Otherwise, remove one instance of the letter from the map.
        map.set(letter, map.get(letter) - 1)
    }
    return true;
}

module.exports = validAnagram;